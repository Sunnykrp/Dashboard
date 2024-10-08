import React from 'react';
import SummaryCard from '../SummaryCard/SummaryCard';
import ProjectManagement from '../ProjectManagement/ProjectManagement';
import TopClients from '../TopClients/TopClients';
import TaskDetails from '../TaskDetails/TaskDetails';
import RecentProjects from '../RecentProjects/RecentProjects';
import Clock from '../Clock/Clock'; // Include the Clock component
import './AttendanceDashboard.css';

const AttendanceDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Attendance Dashboard :</h2>

      {/* Summary Cards and Clock in a single section */}
      <div className="summary-section">
        <div className="summary-cards">
          <SummaryCard title="Total Employees" count={90} icon="fas fa-users" />
          <SummaryCard title="Total Departments" count={18} icon="fas fa-building" />
          <SummaryCard title="Total Holidays" count={3} icon="fas fa-calendar-alt" />
          <SummaryCard title="Paid Leaves" count={60} icon="fas fa-money-check-alt" />
          <SummaryCard title="On Leave Today" count={0} icon="fas fa-user-times" />
          <SummaryCard title="Pending Leave Requests" count={0} icon="fas fa-exclamation-circle" />
          <SummaryCard title="Total Check In Today" count={0} icon="fas fa-sign-in-alt" />
          <SummaryCard title="Total Check Out Today" count={0} icon="fas fa-sign-out-alt" />
        </div>

        {/* Clock Component */}
        <Clock />
      </div>

      {/* Project Management Section */}
      <ProjectManagement />

      {/* Data Section: Top Clients and Task Details */}
      <div className="data-section">
        <TopClients />
        <TaskDetails />
      </div>

      {/* Recent Projects Section */}
      <RecentProjects />
    </div>
  );
};

export default AttendanceDashboard;
