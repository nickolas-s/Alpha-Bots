import React from 'react';
import PropTypes from 'prop-types';
import './tasks-dashboard.styles.scss';

const TaskDashboard = ({ currentTasks, toggleCheck }) => (
  <div className="tasks-dash">
    <h2>Tasks</h2>
    <div className="list-container">
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
    </div>
  </div>
);

TaskDashboard.propTypes = {
  currentTasks: PropTypes.array,
  toggleCheck: PropTypes.func,
};

export default TaskDashboard;
