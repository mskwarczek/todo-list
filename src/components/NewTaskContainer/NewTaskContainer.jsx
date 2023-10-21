import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './NewTaskContainer.module.scss';
import { addTask } from '../../store/slices';
import { Button } from '../Button';
import { Input } from '../Input';

export const NewTaskContainer = () => {
  const [ title, setTitle ] = useState('');
  const dispatch = useDispatch();

  const handleChangeTaskTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClickAdd = () => {
    dispatch(addTask({ title }));
  };

  return (
    <div className={styles.newTask}>
      <Input
        id='add-new-task'
        name='new-task'
        value={title}
        handleChange={handleChangeTaskTitle}
        label='New task name'
        placeholder='Add new task'
      />
      <Button
        handleClick={handleClickAdd}
        text='Add'
        title='Add new task'
        label='Add new task'
      />
    </div>
  );
};
