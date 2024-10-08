import React from 'react';
import './ProjectManagement.css';

const statuses = [
  { title: 'Total Projects', count: 5 },
  { title: 'Pending Projects', count: 1 },
  { title: 'On Hold Projects', count: 0 },
  { title: 'In Progress Projects', count: 2 },
  { title: 'Finished Projects', count: 2 },
  { title: 'Cancelled Projects', count: 0 },
];

const ProjectStatusCards = () => {
  return (
    <div className="status-cards">
      {statuses.map((status, index) => (
        <div key={index} className="status-card">
          <h4>{status.title}</h4>
          <p>{status.count}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectStatusCards;
