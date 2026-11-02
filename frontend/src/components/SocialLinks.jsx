import React from 'react';
import { socials } from '../data/profile';
import './SocialLinks.css';

function SocialLinks({ className = '' }) {
  return (
    <ul className={`social-links ${className}`.trim()}>
      {socials.map(({ label, href, icon }) => (
        <li key={label}>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
            <i className={`bi ${icon}`} aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
