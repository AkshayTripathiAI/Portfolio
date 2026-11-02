import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navLinks, profile } from '../data/profile';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const initials = profile.name.split(' ').map((part) => part[0]).join('');

  return (
    <header className={`site-header${scrolled || menuOpen ? ' is-scrolled' : ''}`}>
      <nav className="container site-nav" aria-label="Main">
        <Link to="/" className="site-logo" aria-label={`${profile.name} – home`}>
          <span className="site-logo-mark">{initials}</span>
          <span className="site-logo-text">{profile.name}</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true" />
        </button>

        <div id="primary-navigation" className={`nav-panel${menuOpen ? ' is-open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary nav-cta">
            Let's talk
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
