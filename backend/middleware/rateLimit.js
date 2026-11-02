const rateLimit = require('express-rate-limit');

// In-memory store: on serverless this is per-instance, which still blunts simple floods.
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { error: 'Too many messages sent. Please try again in a few minutes.' },
});

module.exports = { contactLimiter };
