// Base URL of the backend API. Set REACT_APP_API_URL in frontend/.env to point elsewhere
// (e.g. http://localhost:5000 when running the backend locally).
export const API_URL = (process.env.REACT_APP_API_URL || 'https://akshay-portfolio-api-lilac.vercel.app').replace(/\/$/, '');
