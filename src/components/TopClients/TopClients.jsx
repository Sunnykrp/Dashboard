import React from 'react';
import './TopClients.css';

const clients = [
  { name: 'New Hussein Client', email: 'client@hussein.com', contact: '3213124789', project: 2 },
  { name: 'ISAAC 1', email: 'jnk@john', contact: '25436', project: 1 },
  { name: 'HORIUNAR 2', email: 'test@test.com', contact: '9823458752', project: 1 },
  { name: 'GABSOROI 1', email: 'rah@gmail.com', contact: '9808091969', project: 1 },
  { name: 'BARIWAQO', email: 'tats@gmail.com', contact: '9800000000', project: 1 },
  { name: 'GOBLAKA MUDUG', email: 'md@gmail.com', contact: '078854444', project: 1 },
];

const TopClients = () => {
  return (
    <div className="top-clients">
      <h4>Top Clients</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Project</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.contact}</td>
              <td>{client.project}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopClients;
