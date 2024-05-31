import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    updateTaskStatus: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) {
        task.status = action.payload.status;
        task.timestamp = action.payload.status === 'Completed' ? new Date() : task.timestamp;
      }
    },
    deleteTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    },
  },
});

export const { addTask, updateTaskStatus, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
