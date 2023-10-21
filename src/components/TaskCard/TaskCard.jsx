import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './TaskCard.module.scss';
import {
  selectTaskById,
  updateTask,
  removeTask,
} from '../../store/slices';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';

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
      <Checkbox
        id={id}
        name='task-done'
        title={isDone ? 'Mark as not done' : 'Mark as done'}
        checked={isDone}
        handleChange={handleChangeTaskStatus}
        label={title}
      />
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
