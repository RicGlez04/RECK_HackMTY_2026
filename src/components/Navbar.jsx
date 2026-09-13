import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <div className="brand-badge">B</div>
          <span className="brand-name">Brand</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Call-to-Action */}
        <div className="nav-actions">
          <a href="#login" className="btn-text">
            Log in
          </a>
          <a href="#signup" className="btn-primary">
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          type="button"
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="mobile-link"
            >
              {link.name}
            </a>
          ))}
          <div className="mobile-actions">
            <a href="#login" className="btn-text mobile-btn">
              Log in
            </a>
            <a href="#signup" className="btn-primary mobile-btn">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}