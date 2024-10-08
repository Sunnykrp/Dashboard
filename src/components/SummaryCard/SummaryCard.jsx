import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({ title, count, icon }) => {
  return (
    <div className="summary-card">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <div className="details">
        <h4>{title}</h4>
        <p>{count}</p>
      </div>
    </div>
  );
};

export default SummaryCard;
