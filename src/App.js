import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import DashboardPage from './components/DashboardPage';
import TasksPage from './components/TasksPage';
import BotsPage from './components/BotsPage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        { task: 'Wipe all military data from the internet', checked: false },
        {
          task: 'Get rid of the internet',
          checked: false,
        },
        { task: 'Asset denial', checked: false },
      ],
      bots: [
        {
          address: { city: 'Gwenborough', zipcode: '92998-3874' },
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
          },
          id: 1,
          username: 'Bret',
          phone: '1-770-736-8031 x56442',
        },
        {
          address: { city: 'McKenziehaven', zipcode: '59590-4157' },
          company: {
            name: 'Romaguera-Jacobson',
            catchPhrase: 'Face to face bifurcated interface',
          },
          id: 3,
          username: 'Samantha',
          phone: '1-463-123-4447',
        },
      ],
    };
  }

  handleSubmit = (newTask) => {
    const { tasks } = this.state;

    this.setState({ tasks: [...tasks, newTask] });
  };

  removeTask = (index) => {
    const { tasks } = this.state;

    const filteredTasks = tasks.filter((task, i) => i !== index);

    this.setState({ tasks: [...filteredTasks] });
  };

  toggleCheck = (index) => {
    const { tasks } = this.state;

    const toggleCheck = tasks.filter((task, i) => {
      if (i === index) {
        task.checked = !task.checked;
      }
      return task;
    });

    this.setState({ tasks: [...toggleCheck] });
  };

  addBot = (newBot) => {
    const { bots } = this.state;

    if (bots.length >= 5) return;

    const checkIfRepeated = bots.find((bot) => bot.id === newBot.id);
    if (checkIfRepeated) return;

    this.setState({ bots: [...bots, newBot] });
  };

  removeBot = (botToRemove) => {
    const { bots } = this.state;

    const filteredBots = bots.filter((bot) => bot.id !== botToRemove.id);

    this.setState({ bots: [...filteredBots] });
  };

  calculateSuccess = (array, key, divider) => {
    if (array.length === 0) return 0;

    const result = Math.round(
      array
        .map((single) => single[key].length)
        .reduce((acc, cur) => acc + cur) / divider
    );

    return result;
  };

  percentage = () => {
    const { bots, tasks } = this.state;

    const countTaskLetters = this.calculateSuccess(tasks, 'task', 2);

    const countBotsNameLetters = this.calculateSuccess(bots, 'username', 1.5);

    const successTotal = countBotsNameLetters + countTaskLetters;

    if (successTotal >= 100) {
      return 100;
    }
    return successTotal;
  };

  render() {
    const { tasks, bots } = this.state;
    const success = this.percentage();

    return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <Switch>
            <Route exact path="/">
              <DashboardPage
                currentTasks={tasks}
                toggleCheck={this.toggleCheck}
                currentBots={bots}
                success={success}
              />
            </Route>
            <Route path="/tasks">
              <TasksPage
                currentTasks={tasks}
                handleSubmit={this.handleSubmit}
                removeTask={this.removeTask}
              />
            </Route>
            <Route path="/robots" component={BotsPage}>
              <BotsPage
                addBot={this.addBot}
                currentBots={bots}
                removeBot={this.removeBot}
              />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
