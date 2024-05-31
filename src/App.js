import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './redux/tasksSlice';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const dispatch = useDispatch();
  // Handles adding a new task
  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      dispatch(addTask({
        id: Date.now(),
        title: newTaskTitle.toUpperCase(),
        description: newTaskDescription,
        status: 'Pending',
        timestamp: null
      }));
      setNewTaskTitle("");
      setNewTaskDescription("");
    }
  };

  return (
    <div className="app">
      <h1>To-Do List Application</h1>
      <div className="add-task">
       {/* Input fields for task title and description */}
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task"
        />
        <input
          type="text"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
          placeholder="Add a description"
        />
        {/* Button to add the task */}
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      {/* Task board with different status sections */}
      <div className="task-board">
        <TodoList status="Pending" />
        <TodoList status="In Progress" />
        <TodoList status="Completed" />
      </div>
    </div>
  );
}

export default App;
