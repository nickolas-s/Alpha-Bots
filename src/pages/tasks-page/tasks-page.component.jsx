import React from 'react';
import PropTypes from 'prop-types';
import CustomButton from '../../components/custom-button/custom-button.component';
import './tasks-page.style.scss';

class TasksPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { task: '' };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitForm = (e) => {
    e.preventDefault();
    const { handleSubmit } = this.props;
    const { task } = this.state;

    if (task === '') return;

    handleSubmit(this.state);
    this.setState({ task: '' });
  };

  render() {
    const { currentTasks, removeTask } = this.props;
    const { task } = this.state;

    return (
      <div className="tasks-page">
        <h1>Tasks</h1>
        <p>
          Define the tasks that the bots should accomplish to prevent the
          humanity's doom.
        </p>

        <div className="tasks-edit">
          <form onSubmit={this.submitForm}>
            <input
              type="text"
              name="task"
              value={task}
              onChange={this.handleChange}
            />
            <CustomButton type="submit">Add Task</CustomButton>
          </form>
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
        </div>
      </div>
    );
  }
}

TasksPage.propTypes = {
  currentTasks: PropTypes.array,
  handleSubmit: PropTypes.func,
  removeTask: PropTypes.func,
};

export default TasksPage;
