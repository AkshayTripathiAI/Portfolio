const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '..', '.env') });

const contactRoutes = require('../routes/contactRoutes');

const app = express();

// Vercel sits behind a proxy; needed so rate limiting sees the real client IP.
app.set('trust proxy', 1);

// CORS_ORIGIN is a comma-separated allow-list, e.g. "https://my-site.vercel.app,http://localhost:3000".
// When unset, every origin is allowed.
const allowedOrigins = (process.env.CORS_ORIGIN || '')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean);
app.use(cors({ origin: allowedOrigins.length ? allowedOrigins : '*' }));

app.use(express.json({ limit: '10kb' }));

app.get('/', (req, res) => res.json({ status: 'ok' }));

app.use('/api/contact', contactRoutes);

app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed' || err.type === 'entity.too.large') {
        return res.status(400).json({ error: 'Invalid request body' });
    }
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
});

module.exports = app;
