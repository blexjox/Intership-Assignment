import React, { useState, useEffect } from 'react';

const SearchSortFilter = ({ todos, updateFilteredTodos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [filterBy, setFilterBy] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');

  // Priority order for sorting
  const priorityOrder = { high: 3, medium: 2, low: 1 };



  const applyFiltersAndSorting = () => {
    let filtered = [...todos];


    // 1. Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(todo =>
        todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (todo.description && todo.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // 2. Apply status filter
    if (filterBy === 'completed') {
      filtered = filtered.filter(todo => todo.completed);
    } else if (filterBy === 'pending') {
      filtered = filtered.filter(todo => !todo.completed);
    }

    // 3. Apply priority filter
    if (filterPriority !== 'all') {
      filtered = filtered.filter(todo => todo.priority === filterPriority);
    }

    // 4. Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'priority':
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        case 'date':
        default:
          return new Date(b.date) - new Date(a.date);
      }
    });

    // Update the filtered todos in parent component
    updateFilteredTodos(filtered);
  };
    // Apply filters and sorting whenever dependencies change
  useEffect(() => {
    applyFiltersAndSorting();
  }, [searchTerm, sortBy, filterBy, filterPriority, todos]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilter = (e) => {
    setFilterBy(e.target.value);
  };

  const handlePriorityFilter = (e) => {
    setFilterPriority(e.target.value);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSortBy('date');
    setFilterBy('all');
    setFilterPriority('all');
  };

  return (
    <div className="search-sort-filter">
      <div className="controls-grid">
        <div className="control-group">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search todos..."
            className="search-input"
          />
        </div>
        
        <div className="control-group">
          <select value={sortBy} onChange={handleSort} className="control-select">
            <option value="date">Sort by Date (Newest)</option>
            <option value="title">Sort by Title</option>
            <option value="priority">Sort by Priority</option>
          </select>
        </div>

        <div className="control-group">
          <select value={filterBy} onChange={handleFilter} className="control-select">
            <option value="all">All Status</option>
            <option value="pending">Pending Only</option>
            <option value="completed">Completed Only</option>
          </select>
        </div>

        <div className="control-group">
          <select value={filterPriority} onChange={handlePriorityFilter} className="control-select">
            <option value="all">All Priorities</option>
            <option value="high">High Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="low">Low Priority</option>
          </select>
        </div>

        <div className="control-group">
          <button onClick={clearFilters} className="clear-btn">
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchSortFilter;