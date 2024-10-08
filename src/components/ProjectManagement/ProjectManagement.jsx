import React from 'react';
import ProjectsDetailChart from './ProjectsDetailChart';
import ProjectStatusCards from './ProjectStatusCards';
import './ProjectManagement.css';

const ProjectManagement = () => {
  return (
    <div className="project-management">
      <h3>Project Management</h3>
      <div className="project-chart-and-status">
        <ProjectsDetailChart />
        <ProjectStatusCards />
      </div>
    </div>
  );
};

export default ProjectManagement;
