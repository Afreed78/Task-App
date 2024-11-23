import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterSort from './components/FilterSort';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [sort, setSort] = useState('None');

  // Load tasks from local storage on mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);

  const updateTask = (updatedTask) =>
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));

  const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

  const filteredTasks = tasks.filter((task) =>
    filter === 'All' ? true : task.status === filter
  );

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === 'Due Date') return new Date(a.dueDate) - new Date(b.dueDate);
    if (sort === 'Title') return a.title.localeCompare(b.title);
    return 0;
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <FilterSort filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />
      <TaskList tasks={sortedTasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
    </div>
  );
};

export default App;
