import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Pending', 'In Progress', 'Completed'],
  datasets: [
    {
      data: [1, 2, 2],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

const TaskDetails = () => {
  return (
    <div className="task-details">
      <h4>Task Details</h4>
      <Pie data={data} />
    </div>
  );
};

export default TaskDetails;
