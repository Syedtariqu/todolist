// TodoItem.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTaskStatus, deleteTask } from '../redux/tasksSlice';

function TodoItem({ task, index }) {
  const dispatch = useDispatch();
  // Handles moving a task to the next status
  const handleMove = () => {
    if (task.status === 'Pending') {
      dispatch(updateTaskStatus({ id: task.id, status: 'In Progress' }));
    } else if (task.status === 'In Progress') {
      dispatch(updateTaskStatus({ id: task.id, status: 'Completed' }));
    }
  };
// Handles deleting a completed task
  const handleDelete = () => {
    dispatch(deleteTask({ id: task.id }));
  };

  return (
    <div className="todo-item">
      <div className="todo-details">
        <span className="todo-index">{index}. </span>
         {/* Display task title and description */}
        <div>
          <p className="todo-title">{task.title}</p>
          {task.description && <p className="todo-description">{task.description}</p>}
        </div>
      </div>
      <div className="todo-actions">
       {/* Show move button for Pending and In Progress tasks */}
        {task.status !== 'Completed' && (
          <button onClick={handleMove}>
            {task.status === 'Pending' ? 'Move to In Progress' : 'Move to Completed'}
          </button>
        )}
        {/* Show delete button for Completed tasks */}
        {task.status === 'Completed' && (
          <>
            <span>{new Date(task.timestamp).toLocaleString()}</span>
            <button onClick={handleDelete} className="delete-button">Delete</button>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
