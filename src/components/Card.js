import React from 'react';

export default function Card({ title, color, description, children }) {
  return (
    <div style={{
      borderLeft: `4px solid ${color}`,
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '5px',
      background: 'var(--ifm-card-background-color)'
    }}>
      <h3 style={{color}}>{title}</h3>
      <p>{description}</p>
      <ul>{children}</ul>
    </div>
  );
}