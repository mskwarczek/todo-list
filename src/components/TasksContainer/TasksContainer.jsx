import { useSelector } from 'react-redux';

import './TasksContainer.scss';
import { TaskCard } from '../TaskCard';
import { selectTaskIds } from '../../store/slices';

export const TasksContainer = () => {
  const tasks = useSelector(selectTaskIds);

  return (
    <div className='tasks-container'>
      {tasks.map(taskId => (
        <TaskCard
          key={taskId}
          id={taskId}
        />
      ))}
    </div>
  );
};
