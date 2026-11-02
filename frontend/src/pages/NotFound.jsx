import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="gradient-text" style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 700, lineHeight: 1 }}>
          404
        </p>
        <h1 style={{ margin: '16px 0 12px' }}>Page not found</h1>
        <p className="muted" style={{ marginBottom: 28 }}>
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link to="/" className="btn btn-primary">
          <i className="bi bi-house" aria-hidden="true" /> Back home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
