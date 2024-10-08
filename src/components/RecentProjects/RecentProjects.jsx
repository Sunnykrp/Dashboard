import React from 'react';
import './RecentProjects.css';

const recentProjects = [
  { title: 'Web Admin', dateStart: '7 Ashwin 2081', deadline: '9 Ashwin 2081', leader: 'Leader 1', completion: '100%', priority: 'Medium' },
  { title: 'Test Project for Hussein', dateStart: '1 Ashwin 2081', deadline: '14 Ashwin 2081', leader: 'Leader 2', completion: '80%', priority: 'High' },
  { title: 'MASHRUCAA MAAMAL DAADJANTA', dateStart: '22 Bhadra 2081', deadline: '14 Ashwin 2081', leader: 'Leader 3', completion: '30%', priority: 'Low' },
];

const RecentProjects = () => {
  return (
    <div className="recent-projects">
      <h4>Recent Projects</h4>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date Start</th>
            <th>Deadline</th>
            <th>Leader</th>
            <th>Completion</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {recentProjects.map((project, index) => (
            <tr key={index}>
              <td>{project.title}</td>
              <td>{project.dateStart}</td>
              <td>{project.deadline}</td>
              <td>{project.leader}</td>
              <td>{project.completion}</td>
              <td>{project.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentProjects;
