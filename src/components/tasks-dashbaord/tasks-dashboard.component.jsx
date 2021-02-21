import React from 'react';
import PropTypes from 'prop-types';

import {
  TaskDashboardConainer,
  TaskListContainer,
} from './tasks-dashboard.styles';

const TaskDashboard = ({ currentTasks, toggleCheck }) => (
  <TaskDashboardConainer>
    <h2>Tasks</h2>
    <TaskListContainer>
      <ul>
        {currentTasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              id={index}
              onChange={() => toggleCheck(index)}
              checked={task.checked ? 'checked' : ''}
            />
            <label htmlFor={index}>{task.task}</label>
          </li>
        ))}
      </ul>
    </TaskListContainer>
  </TaskDashboardConainer>
);

TaskDashboard.propTypes = {
  currentTasks: PropTypes.array,
  toggleCheck: PropTypes.func,
};

export default TaskDashboard;
