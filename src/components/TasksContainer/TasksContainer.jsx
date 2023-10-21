import { useSelector } from 'react-redux';

import './TasksContainer.scss';
import { TaskCard } from '../TaskCard';
import { selectTaskIds } from '../../store/slices';

export const TasksContainer = () => {
  const tasks = useSelector(selectTaskIds);

  return (
    <div className='tasks-container'>
      <h2 className='tasks-container__title'>TODO:</h2>
      {tasks && tasks.length
        ? tasks.map(taskId => (
          <TaskCard
            key={taskId}
            id={taskId}
          />
        ))
        : <p className='tasks-container__empty'>Your list is empty.</p>
      }
    </div>
  );
};
