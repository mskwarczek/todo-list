import styles from './App.module.scss';
import { NewTaskContainer } from './components/NewTaskContainer';
import { TasksContainer } from './components/TasksContainer';

const App = () => {
  return (
    <div className={styles.appContainer}>
      <h1 className={styles.header}>TODO List</h1>
      <NewTaskContainer />
      <TasksContainer />
    </div>
  );
};

export default App;
