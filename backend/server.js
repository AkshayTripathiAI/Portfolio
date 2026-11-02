// Local development entry point. On Vercel, api/index.js is used directly as a serverless function.
const app = require('./api/index');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
