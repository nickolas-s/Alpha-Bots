import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import DashboardPage from './pages/dashboard-page/dashboard-page.component';
import TasksPage from './pages/tasks-page/tasks-page.component';
import BotsPage from './pages/bots-page/bots-page.component';
import { calculateSuccess } from './utils/utils';
import { tasksSamples, botsSamples } from './utils/samples';

import GlobalStyle from './styles-config/globalStyles';

const App = () => {
  const [tasks, setTasks] = useState(tasksSamples);
  const [bots, setBots] = useState(botsSamples);

  const handleSubmit = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (index) => {
    const filteredTasks = tasks.filter((task, i) => i !== index);
    setTasks([...filteredTasks]);
  };

  const toggleCheck = (index) => {
    const toggleTask = tasks.filter((task, i) => {
      if (i === index) {
        task.checked = !task.checked;
      }
      return task;
    });
    setTasks([...toggleTask]);
  };

  const addBot = (newBot) => {
    if (bots.length >= 5) return;
    const checkIfRepeated = bots.find((bot) => bot.id === newBot.id);
    if (checkIfRepeated) return;
    setBots([...bots, newBot]);
  };

  const removeBot = (botToRemove) => {
    const filteredBots = bots.filter((bot) => bot.id !== botToRemove.id);
    setBots([...filteredBots]);
  };

  const percentage = () => {
    const countTaskLetters = calculateSuccess(tasks, 'task', 2);
    const countBotsNameLetters = calculateSuccess(bots, 'username', 1.5);
    const successTotal = countBotsNameLetters + countTaskLetters;
    if (successTotal >= 100) {
      return 100;
    }
    return successTotal;
  };

  const success = percentage();

  return (
    <>
      <GlobalStyle />
      <Header />
      <div className="wrapper">
        <Switch>
          <Route exact path="/">
            <DashboardPage
              currentTasks={tasks}
              toggleCheck={toggleCheck}
              currentBots={bots}
              success={success}
            />
          </Route>
          <Route path="/tasks">
            <TasksPage
              currentTasks={tasks}
              handleSubmit={handleSubmit}
              removeTask={removeTask}
            />
          </Route>
          <Route path="/robots" component={BotsPage}>
            <BotsPage
              addBot={addBot}
              currentBots={bots}
              removeBot={removeBot}
            />
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default App;
