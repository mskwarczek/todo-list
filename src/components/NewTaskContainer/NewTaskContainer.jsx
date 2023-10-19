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
    <div className='new-task-container'>
      <div>
        <label htmlFor="add-new-task">New task:</label>
      </div>
      <div>
        <input
          type='text'
          name='new-task'
          id='add-new-task'
          value={title}
          onChange={handleChangeTaskTitle}
        />
        <button onClick={handleClickAdd}>add</button>
      </div>
    </div>
  );
};
