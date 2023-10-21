import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './TaskCard.module.scss';
import {
  selectTaskById,
  updateTask,
  removeTask
} from '../../store/slices';
import { Button } from '../Button';

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
    <div className={styles.taskCard}>
      <div className={styles.task}>
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
          className={`${styles.title} ${isDone ? styles.done : ''}`}
        >
          {title}
        </label>
      </div>
      <div className={styles.btnRemove}>
        <Button
          handleClick={handleClickRemove}
          text='Remove'
          title='Remove'
          label={`Remove task ${title}`}
        />
      </div>
    </div>
  );
});
