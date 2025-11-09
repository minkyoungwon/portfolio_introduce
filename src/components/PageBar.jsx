// PageBar.jsx
import React from 'react';
import '../style/PageBar.css';

function PageBar({ currentPage, totalPages, onPageChange }) {
  const indicators = [];
  for (let i = 0; i < totalPages; i++) {
    indicators.push(
      <div
        key={i}
        className={`page-indicator ${currentPage === i ? 'active' : ''}`}
        onClick={() => onPageChange(i)} // Add onClick handler
      />
    );
  }

  return <div className="page-bar">{indicators}</div>;
}

export default PageBar;
