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
      <div className='task-card__task'>
        <input
          id={id}
          type='checkbox'
          name='task-done'
          title={isDone ? 'Mark as not done' : 'Mark as done'}
          checked={isDone}
          onChange={handleChangeTaskStatus}
        />
        <label
          htmlFor={id}
          className={`task-card__title ${isDone ? 'task-card__title--done' : ''}`}
        >
          {title}
        </label>
      </div>
      <button
        className='task-card__btn-remove'
        onClick={handleClickRemove}
        title='Remove'
        aria-label='Remove'
      >
        Remove
      </button>
    </div>
  );
});
