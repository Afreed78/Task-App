import React, { useState } from 'react';
import TaskEditModal from './TaskEditModal';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './animations.css';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask }) => {
  const [editTask, setEditTask] = useState(null);

  return (
    <div className="task-list">
      <h2 className="text-xl font-semibold mb-4">Task List</h2>
      <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tasks.map((task) => (
          <CSSTransition key={task.id} timeout={300} classNames="task">
            <div className="p-4 border rounded-md shadow-md bg-white">
              <h3 className="text-lg font-bold">{task.title}</h3>
              <p>{task.description}</p>
              <p>
                <strong>Due Date:</strong> {task.dueDate}
              </p>
              <p>
                <strong>Status:</strong> {task.status}
              </p>
              <div className="flex justify-between mt-3">
                <button
                  onClick={() => setEditTask(task)}
                  className="text-blue-500 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {editTask && (
        <TaskEditModal
          task={editTask}
          onClose={() => setEditTask(null)}
          onSave={onUpdateTask}
        />
      )}
    </div>
  );
};

export default TaskList;
