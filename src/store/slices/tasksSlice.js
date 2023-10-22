import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { createTimestamp, createId } from '../../utils';

const tasksAdapter = createEntityAdapter({
  sortComparer: (a, b) => {
    const doneTest = Number(a.isDone) - Number(b.isDone);
    if (doneTest !== 0) return Number(a.isDone) - Number(b.isDone);
    return a.updatedAt - b.updatedAt;
  },
});

const initialState = tasksAdapter.getInitialState();

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action) {
      const newTask = {
        id: createId('task'),
        title: action.payload.title,
        isDone: false,
        updatedAt: createTimestamp(),
      };
      tasksAdapter.addOne(state, newTask);
    },
    updateTask(state, action) {
      const { id, changes } = action.payload;
      const updateObj = {
        id,
        changes: {
          ...changes,
          updatedAt: createTimestamp(),
        },
      };
      tasksAdapter.updateOne(state, updateObj);
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
