import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { createId } from '../../utils/createId';

const tasksAdapter = createEntityAdapter({
  sortComparer: (a, b) => Number(a.isDone) - Number(b.isDone),
});

const initialState = tasksAdapter.getInitialState();

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      const newTodo = {
        id: createId('task'),
        title: action.payload.title,
        isDone: false,
      };
      tasksAdapter.addOne(state, newTodo);
    },
    updateTask(state, action) {
      tasksAdapter.updateOne(state, action.payload);
    },
    removeTask(state, action) {
      tasksAdapter.removeOne(state, action.payload.id);
    },
  },
});

export const {
  addTask,
  updateTask,
  removeTask,
} = tasksSlice.actions;

export const tasksReducer = tasksSlice.reducer;

export const {
  selectAll: selectAllTasks,
  selectById: selectTaskById,
  selectIds: selectTaskIds,
} = tasksAdapter.getSelectors(state => state.tasks);
