import './App.scss';
import { NewTaskContainer } from './components/NewTaskContainer';
import { TasksContainer } from './components/TasksContainer';

const App = () => {
  return (
    <div className='app-container'>
      <h1 className='header'>TODO List</h1>
      <NewTaskContainer />
      <TasksContainer />
    </div>
  );
};

export default App;
