import React, { useState } from 'react';

const TaskTrek = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks, 
        {
          id: Date.now(), 
          text: newTask, 
          completed: false
        }
      ]);
      setNewTask(''); // Clear input after adding
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">TaskTrek</h1>
      
      <div className="flex mb-4">
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task" 
          className="flex-grow p-2 border rounded-l"
        />
        <button 
          onClick={addTask}
          className="bg-blue-500 text-white p-2 rounded-r"
        >
          Add
        </button>
      </div>

      <div>
        {tasks.map(task => (
          <div 
            key={task.id} 
            className="flex items-center bg-white p-2 border-b"
          >
            {task.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskTrek;