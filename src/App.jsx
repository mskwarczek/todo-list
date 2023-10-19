import './App.scss';
import { NewTaskContainer } from './components/NewTaskContainer';
import { TasksContainer } from './components/TasksContainer';

const App = () => {
  return (
    <div className='app-container'>
      TODO List
      <NewTaskContainer />
      <TasksContainer />
    </div>
  );
};

export default App;
