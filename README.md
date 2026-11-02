# Akshay Tripathi – Portfolio

Personal portfolio for Akshay Tripathi, Senior AI Engineer building agentic AI and production LLM systems.

- **Frontend:** React 18 (Create React App), React Router, framer-motion, Bootstrap Icons
- **Backend:** Node.js + Express API with MongoDB (Mongoose) that stores contact-form messages, deployed as a Vercel serverless function

## Project structure

```
Portfolio/
├── backend/
│   ├── api/index.js              # Express app (Vercel serverless entry)
│   ├── server.js                 # Local dev entry – runs the app on PORT
│   ├── config/db.js              # Cached MongoDB connection
│   ├── controllers/              # Request handlers (contact form)
│   ├── middleware/rateLimit.js   # Rate limiting for the contact endpoint
│   ├── models/                   # Mongoose models
│   ├── routes/                   # Express routes
│   ├── vercel.json               # Routes every request to api/index.js
│   └── .env.example
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/           # Layout, header, footer, cards, contact form…
    │   ├── pages/                # One component per route
    │   ├── data/profile.js       # All site content: bio, experience, projects, skills, links
    │   ├── utils/experience.js   # Experience duration helpers
    │   ├── config.js             # API base URL
    │   └── App.jsx               # Routes
    ├── vercel.json               # SPA fallback so deep links work
    └── .env.example
```

Most content edits only touch [`frontend/src/data/profile.js`](frontend/src/data/profile.js). Years of experience
are computed from `careerStart`, so they stay current automatically.

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer
- A MongoDB database (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Backend

```bash
cd backend
npm install
cp .env.example .env   # then set MONGO_URI
npm run dev            # http://localhost:5000
```

| Variable      | Description                                                                 |
| ------------- | --------------------------------------------------------------------------- |
| `MONGO_URI`   | MongoDB connection string (required)                                        |
| `PORT`        | Local port, defaults to `5000`                                              |
| `CORS_ORIGIN` | Comma-separated list of allowed origins. Leave empty to allow all origins. |
| `GROQ_API_KEY` | Groq API key for the chat assistant. Without it the chat shows an offline message. |
| `GROQ_MODEL`  | Optional model override (defaults to `openai/gpt-oss-120b`, falling back to `openai/gpt-oss-20b`). |

`POST /api/contact` accepts `{ name, email, message }`. Input is validated and length-limited, and each IP can send
5 messages per 15 minutes.

`POST /api/chat` accepts `{ messages: [{ role, content }] }` and streams the answer as Server-Sent Events
(`data: {"delta": "..."}` … `data: {"done": true}`). The assistant answers only from
[`backend/data/profile.md`](backend/data/profile.md) — update that file when the resume changes. Each IP can ask
20 questions per 10 minutes.

### Frontend

```bash
cd frontend
npm install
npm start              # http://localhost:3000
```

By default the frontend talks to the deployed backend. To use a local backend, create `frontend/.env.development.local`:

```env
REACT_APP_API_URL=http://localhost:5000
```

Other scripts: `npm test` and `npm run build`.

## Deployment

Both apps deploy to Vercel as separate projects:

- **backend/** – set `MONGO_URI`, `GROQ_API_KEY` (and ideally `CORS_ORIGIN` = your frontend URL) in the project's environment variables.
- **frontend/** – set `REACT_APP_API_URL` to the backend URL if it differs from the default in `src/config.js`.
