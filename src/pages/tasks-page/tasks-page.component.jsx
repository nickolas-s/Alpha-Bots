import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../components/custom-button/custom-button.component';

import {
  TasksPageContainer,
  Form,
  TasksEditContainer,
} from './tasks-page.style';

const TasksPage = ({ currentTasks, removeTask, handleSubmit }) => {
  const [newTask, setTask] = useState({ task: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!newTask.task) return;
    handleSubmit(newTask);
    setTask({ task: '' });
  };

  return (
    <TasksPageContainer>
      <h1>Tasks</h1>
      <p>
        Define the tasks that the bots should accomplish to prevent the
        humanity's doom.
      </p>

      <TasksEditContainer>
        <Form onSubmit={submitForm}>
          <input
            type="text"
            name="task"
            value={newTask.task}
            onChange={handleChange}
          />
          <CustomButton type="submit">Add Task</CustomButton>
        </Form>
        <ul>
          {currentTasks.map((singleTask, index) => (
            <li key={index}>
              <span className={singleTask.checked ? 'checked' : ''}>
                {singleTask.task}
              </span>
              <CustomButton
                onClick={() => {
                  removeTask(index);
                }}
              >
                Delete
              </CustomButton>
            </li>
          ))}
        </ul>
      </TasksEditContainer>
    </TasksPageContainer>
  );
};

TasksPage.propTypes = {
  currentTasks: PropTypes.array,
  handleSubmit: PropTypes.func,
  removeTask: PropTypes.func,
};

export default TasksPage;
