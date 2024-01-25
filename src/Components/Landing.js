// TodoList.js

import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import { addTodo,deleteTodo } from '../Store/TodoSlice';
import {useSelector,useDispatch} from 'react-redux';

const Landing = () => {
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const addTask = () => {
    if (title.trim() !== '' && description.trim() !== '' && category.trim() !== '' && date.trim() !== '') {
      const newTaskObject = { title, description, category, date };
      setTasks([...tasks, newTaskObject]);
      dispatch(addTodo(newTaskObject));
      setTitle('');
      setDescription('');
      setCategory('');
      setDate('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    dispatch(deleteTodo(index));
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 bg-white shadow-lg rounded-md realtive">
      <h1 className="text-2xl font-semibold mb-4">Todo List</h1>

      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="w-full p-2 mb-2 border border-gray-300 rounded-md"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="date"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white p-2 rounded-md"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className="p-4 border-b border-gray-300"
          >
            <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
            <p className="text-gray-600 mb-2">{task.description}</p>
            <p className="text-gray-600 mb-2"><strong>Category:</strong> {task.category}</p>
            <p className="text-gray-600 mb-2"><strong>Date:</strong> {task.date}</p>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={() => removeTask(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Landing;
