import { configureStore } from '@reduxjs/toolkit';

import { tasksReducer } from './slices';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});
