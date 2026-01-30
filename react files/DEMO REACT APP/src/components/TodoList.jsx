import React, { useState } from 'react';

const TodoList = ({ todos, deleteTodo, toggleComplete, editTodo, updatePriority }) => {
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description || '');
  };

  const saveEdit = (id) => {
    if (editTitle.trim()) {
      editTodo(id, editTitle, editDescription);
      setEditingId(null);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff6b6b';
      case 'medium': return '#ffd166';
      case 'low': return '#06d6a0';
      default: return '#118ab2';
    }
  };

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p className="no-todos">No todos yet. Add one above!</p>
      ) : (
        todos.map(todo => (
          <div
            key={todo.id}
            className={`todo-item ${todo.completed ? 'completed' : ''}`}
            style={{ borderLeft: `4px solid ${getPriorityColor(todo.priority)}` }}
          >
            {editingId === todo.id ? (
              <div className="edit-form">
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  className="edit-input"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="edit-textarea"
                  placeholder="Description (optional)"
                />
                <div className="edit-actions">
                  <button onClick={() => saveEdit(todo.id)} className="save-btn">Save</button>
                  <button onClick={cancelEdit} className="cancel-btn">Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <div className="todo-content">
                  <div className="todo-header">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleComplete(todo.id)}
                      className="checkbox"
                    />
                    <h3>{todo.title}</h3>
                    <select
                      value={todo.priority}
                      onChange={(e) => updatePriority(todo.id, e.target.value)}
                      className="priority-select"
                      style={{ backgroundColor: getPriorityColor(todo.priority) }}
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                    </select>
                  </div>
                  {todo.description && <p className="description">{todo.description}</p>}
                  <div className="todo-footer">
                    <span className="date">{todo.date}</span>
                    <div className="actions">
                      <button onClick={() => startEdit(todo)} className="edit-btn">Edit</button>
                      <button onClick={() => deleteTodo(todo.id)} className="delete-btn">Delete</button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;