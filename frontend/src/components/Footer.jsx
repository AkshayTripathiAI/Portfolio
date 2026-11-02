import React from 'react';
import { Link } from 'react-router-dom';
import { navLinks, profile } from '../data/profile';
import SocialLinks from './SocialLinks';
import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <h2>{profile.name}</h2>
          <p>{profile.role} · {profile.headline}</p>
          <a href={`mailto:${profile.email}`} className="footer-email">
            <i className="bi bi-envelope" aria-hidden="true" /> {profile.email}
          </a>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <h3>Explore</h3>
          <ul>
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="footer-social">
          <h3>Connect</h3>
          <SocialLinks />
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Node.js.</p>
      </div>
    </footer>
  );
}

export default Footer;
