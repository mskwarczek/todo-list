import { useSelector } from 'react-redux';

import styles from './TasksContainer.module.scss';
import { TaskCard } from '../TaskCard';
import { selectTaskIds } from '../../store/slices';

export const TasksContainer = () => {
  const tasks = useSelector(selectTaskIds);

  return (
    <div className={styles.tasksContainer}>
      <h2 className={styles.title}>Tasks:</h2>
      {tasks && tasks.length
        ? tasks.map(taskId => (
          <TaskCard
            key={taskId}
            id={taskId}
          />
        ))
        : <p className={styles.empty}>Your list is empty.</p>
      }
    </div>
  );
};
