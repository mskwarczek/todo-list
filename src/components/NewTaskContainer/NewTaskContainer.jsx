import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './NewTaskContainer.scss';
import { addTask } from '../../store/slices';

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
    <div className='new-task'>
      <input
        id='add-new-task'
        className='new-task__input'
        type='text'
        name='new-task'
        value={title}
        onChange={handleChangeTaskTitle}
        aria-label='New TODO name'
        placeholder='Add new TODO'
      />
      <button
        className='new-task__button'
        onClick={handleClickAdd}
        title='Add new TODO'
        aria-label='Add new TODO'
      >
        Add
      </button>
    </div>
  );
};
