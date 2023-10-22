import { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './NewTaskContainer.module.scss';
import { addTask } from '../../store/slices';
import { Button } from '../Button';
import { Input } from '../Input';
import { PlusIcon } from '../../assets/icons/PlusIcon';

export const NewTaskContainer = () => {
  const [ title, setTitle ] = useState('');
  const dispatch = useDispatch();

  const handleChangeTaskTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleClickAdd = (e) => {
    e.preventDefault();
    if (title.length) {
      dispatch(addTask({ title }));
      setTitle('');
    };
  };

  return (
    <form className={styles.newTask}
      onSubmit={handleClickAdd}
    >
      <Input
        id='add-new-task'
        name='new-task'
        value={title}
        handleChange={handleChangeTaskTitle}
        label='New task'
        placeholder='New task'
        required={true}
      />
      <Button
        handleClick={handleClickAdd}
        text='Add'
        title={`Add new task. ${ !title.length ? 'Please enter task name first' : '' }`}
        label='Add new task'
        disabled={!title.length}
        icon={<PlusIcon className={styles.plusIcon} />}
      />
    </form>
  );
};
