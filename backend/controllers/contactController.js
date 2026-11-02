const connectDB = require('../config/db');
const Contact = require('../models/Contact');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LIMITS = { name: 100, email: 254, message: 5000 };

const clean = (value) => (typeof value === 'string' ? value.trim() : '');

const validate = ({ name, email, message }) => {
    const errors = {};
    if (!name) errors.name = 'Name is required';
    else if (name.length > LIMITS.name) errors.name = `Name must be at most ${LIMITS.name} characters`;

    if (!email) errors.email = 'Email is required';
    else if (email.length > LIMITS.email || !EMAIL_RE.test(email)) errors.email = 'Email is invalid';

    if (!message) errors.message = 'Message is required';
    else if (message.length > LIMITS.message) errors.message = `Message must be at most ${LIMITS.message} characters`;

    return errors;
};

exports.createContact = async (req, res) => {
    const body = req.body || {};

    // Honeypot: real users never see or fill the "company" field, bots usually do.
    // Pretend success so the bot has nothing to learn from.
    if (clean(body.company)) {
        return res.status(201).json({ ok: true });
    }

    const data = {
        name: clean(body.name),
        email: clean(body.email).toLowerCase(),
        message: clean(body.message),
    };

    const errors = validate(data);
    if (Object.keys(errors).length) {
        return res.status(400).json({ error: 'Please check the highlighted fields.', fields: errors });
    }

    try {
        await connectDB();
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        return res.status(503).json({ error: 'Service temporarily unavailable. Please try again later.' });
    }

    try {
        await Contact.create(data);
        res.status(201).json({ ok: true });
    } catch (error) {
        console.error('Failed to save contact message:', error.message);
        res.status(500).json({ error: 'Could not send your message. Please try again later.' });
    }
};
