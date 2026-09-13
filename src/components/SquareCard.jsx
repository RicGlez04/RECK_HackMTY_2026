import React from 'react';
import './SquareCard.css';

export default function SquareCard({
  title = "Feature Overview",
  subtitle = "Performance & Metrics",
  text = "This component maintains a strict 1:1 aspect ratio. The border outline and clean spacing keep the content readable and centered."
}) {
  return (
    <div className="square-card">
      <div className="square-card-inner">
        <span className="card-subtitle">{subtitle}</span>
        <h3 className="card-title">{title}</h3>
        <p className="card-body">{text}</p>
      </div>
    </div>
  );
}