import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function TodoList({ status }) {
    // Select tasks based on their status
  const tasks = useSelector(state => state.tasks.filter(task => task.status === status));

  return (
    <div className="todo-list">
      <h2>{status}</h2>
      {tasks.map((task, index) => (
        <TodoItem key={task.id} task={task} index={index + 1} />
      ))}
    </div>
  );
}

export default TodoList;
