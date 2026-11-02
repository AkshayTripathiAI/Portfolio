const rateLimit = require('express-rate-limit');

// In-memory store: on serverless this is per-instance, which still blunts simple floods.
const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { error: 'Too many messages sent. Please try again in a few minutes.' },
});

// Each chat answer costs LLM tokens, so cap how many questions one visitor can ask.
const chatLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 20,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { error: "You've asked a lot of questions! Please try again in a few minutes, or email Akshay directly." },
});

module.exports = { contactLimiter, chatLimiter };
