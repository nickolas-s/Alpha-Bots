import React from 'react';
import PropTypes from 'prop-types';
import TaskDashboard from '../../components/tasks-dashbaord/tasks-dashboard.component';
import BotsDashboard from '../../components/bots-dashboard/bots-dashboard.component';
import Hero from '../../components/hero/hero.component';

const DashboardPage = ({ currentTasks, toggleCheck, currentBots, success }) => (
  <div>
    <Hero success={success} />
    <TaskDashboard currentTasks={currentTasks} toggleCheck={toggleCheck} />
    <BotsDashboard currentBots={currentBots} />
  </div>
);

DashboardPage.propTypes = {
  currentTasks: PropTypes.array,
  toggleCheck: PropTypes.func,
  currentBots: PropTypes.array,
  success: PropTypes.number,
};

export default DashboardPage;
