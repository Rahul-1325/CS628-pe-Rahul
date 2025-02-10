import React, { useState } from 'react';
import './App.css';

function App() {
const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '') {  
  setTaskList([...taskList, task]);  
   setTask(''); 
    }
  };

const handleDeleteTask = (taskToDelete) => {
   setTaskList(taskList.filter(t => t !== taskToDelete)); 
};

  return (
    <div className="container">
    <h1>My To-Do List</h1>
    <div className="input-section">
     <input
      type="text"
      placeholder="Type a task"
       value={task}
       onChange={(e) => setTask(e.target.value)} 
    />
     <button onClick={handleAddTask}>Add Task</button>
    </div>

    <ul className="task-list">
     {taskList.map((task, index) => (
    <li key={index}>
       {task}
        <button className="delete-btn" onClick={() => handleDeleteTask(task)}>Delete</button>
    </li>
   ))}
  </ul>
  </div>
  );
}

export default App;
