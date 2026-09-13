import React, { useState } from 'react';
import './HeroSection.css';

export default function HeroSection() {
  const [inputValue, setInputValue] = useState('');

  return (
    <section className="hero-section">
      <h1 className="hero-title">Build Something Great</h1>
      <p className="hero-subtitle">
        A lightweight, modern workspace designed to bring your best ideas to life.
      </p>

      <div className="hero-input-wrapper">
        <input
          type="text"
          className="hero-input"
          placeholder="Enter your email or project name..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>

      <div className="hero-button-group">
        <button type="button" className="btn btn-primary">
          Get Started
        </button>
        <button type="button" className="btn btn-secondary">
          Live Demo
        </button>
        <button type="button" className="btn btn-outline">
          Learn More
        </button>
      </div>
    </section>
  );
}