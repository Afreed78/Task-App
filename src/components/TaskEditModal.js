import React, { useState } from 'react';

const TaskEditModal = ({ task, onClose, onSave }) => {
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleSave = () => {
    onSave(updatedTask);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md w-96">
        <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
        <input
          type="text"
          value={updatedTask.title}
          onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
          className="w-full mb-3 p-2 border rounded-md"
        />
        <textarea
          value={updatedTask.description}
          onChange={(e) =>
            setUpdatedTask({ ...updatedTask, description: e.target.value })
          }
          className="w-full mb-3 p-2 border rounded-md"
        />
        <input
          type="date"
          value={updatedTask.dueDate}
          onChange={(e) => setUpdatedTask({ ...updatedTask, dueDate: e.target.value })}
          className="w-full mb-3 p-2 border rounded-md"
        />
        <select
          value={updatedTask.status}
          onChange={(e) => setUpdatedTask({ ...updatedTask, status: e.target.value })}
          className="w-full mb-3 p-2 border rounded-md"
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <div className="flex justify-between">
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-md">
            Save
          </button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskEditModal;
