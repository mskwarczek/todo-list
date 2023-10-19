import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './TaskCard.scss';
import {
  selectTaskById,
  updateTask,
  removeTask
} from '../../store/slices';

export const TaskCard = memo(function TaskCard({ id }) {
  const { title, isDone } = useSelector(state => selectTaskById(state, id));
  const dispatch = useDispatch();

  const handleChangeTaskStatus = () => {
    dispatch(updateTask({
      id,
      changes: {
        isDone: !isDone,
      },
    }));
  };

  const handleClickRemove = () => {
    dispatch(removeTask({ id }));
  };

  return (
    <div className='task-card'>
      <div>
        <input
          type='checkbox'
          name='task-done'
          id={id}
          checked={isDone}
          onChange={handleChangeTaskStatus}
        />
        <label htmlFor={id}>
          {title}
        </label>
      </div>
      <div>
        <button onClick={handleClickRemove}>
          remove
        </button>
      </div>
    </div>
  );
});
