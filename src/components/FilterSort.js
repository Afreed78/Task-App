import React from 'react';

const FilterSort = ({ filter, setFilter, sort, setSort }) => (
  <div className="flex justify-between mb-6">
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="border p-2 rounded-md"
    >
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
    <select
      value={sort}
      onChange={(e) => setSort(e.target.value)}
      className="border p-2 rounded-md"
    >
      <option value="None">None</option>
      <option value="Due Date">Due Date</option>
      <option value="Title">Title</option>
    </select>
  </div>
);

export default FilterSort;
