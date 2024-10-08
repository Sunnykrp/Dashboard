import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Pending', 'On Hold', 'In Progress', 'Completed', 'Cancelled'],
  datasets: [
    {
      label: 'Projects',
      data: [1, 0, 2, 2, 0],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#F7464A'],
    },
  ],
};

const ProjectsDetailChart = () => {
  return (
    <div className="projects-detail-chart">
      <Bar data={data} />
    </div>
  );
};

export default ProjectsDetailChart;
