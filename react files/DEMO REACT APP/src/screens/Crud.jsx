import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './Crud.css';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

function Crud() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    body: '',
    userId: 1
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [editMode, setEditMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Debounced search effect
  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm, posts, sortBy, sortOrder]);

  // Filter, sort, and paginate posts
  const handleSearch = useCallback(() => {
    let result = posts;

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(term) ||
        post.body.toLowerCase().includes(term)
      );
    }

    // Sort posts
    result = [...result].sort((a, b) => {
      let aValue, bValue;
      
      if (sortBy === 'title' || sortBy === 'body') {
        aValue = a[sortBy].toLowerCase();
        bValue = b[sortBy].toLowerCase();
      } else {
        aValue = a[sortBy];
        bValue = b[sortBy];
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredPosts(result);
    setCurrentPage(1);
  }, [searchTerm, posts, sortBy, sortOrder]);

  // CRUD Operations
  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/posts`);
      setPosts(response.data);
      setFilteredPosts(response.data);
    } catch (err) {
      setError('Error fetching posts: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/posts`, {
        title: formData.title,
        body: formData.body,
        userId: formData.userId
      });
      
      const newPost = { ...response.data, id: posts.length + 1 };
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      resetForm();
    } catch (err) {
      setError('Error creating post: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const updatePost = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(`${API_BASE_URL}/posts/${formData.id}`, {
        id: formData.id,
        title: formData.title,
        body: formData.body,
        userId: formData.userId
      });

      const updatedPosts = posts.map(post =>
        post.id === formData.id ? { ...post, ...formData } : post
      );
      
      setPosts(updatedPosts);
      resetForm();
      setEditMode(false);
    } catch (err) {
      setError('Error updating post: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    setLoading(true);
    try {
      await axios.delete(`${API_BASE_URL}/posts/${id}`);
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
    } catch (err) {
      setError('Error deleting post: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Form handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = (post) => {
    setFormData({
      id: post.id,
      title: post.title,
      body: post.body,
      userId: post.userId
    });
    setEditMode(true);
  };

  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      body: '',
      userId: 1
    });
    setEditMode(false);
  };

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Loading and error states
  if (loading && posts.length === 0) {
    return <div className="loading">Loading posts...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>JSONPlaceholder CRUD App</h1>
        <p>Manage posts with search, filter, and sort functionality</p>
      </header>

      <div className="container">
        {/* Search and Sort Controls */}
        <div className="controls">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>

          <div className="sort-controls">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="id">Sort by ID</option>
              <option value="title">Sort by Title</option>
              <option value="body">Sort by Content</option>
            </select>

            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="sort-order"
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
        </div>

        {/* Form for Create/Update */}
        <div className="form-container">
          <h2>{editMode ? 'Edit Post' : 'Create New Post'}</h2>
          <form onSubmit={editMode ? updatePost : createPost} className="post-form">
            {editMode && (
              <div className="form-group">
                <label>Post ID:</label>
                <input
                  type="text"
                  value={formData.id}
                  disabled
                  className="form-input"
                />
              </div>
            )}

            <div className="form-group">
              <label>Title:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="form-input"
                placeholder="Enter post title"
              />
            </div>

            <div className="form-group">
              <label>Content:</label>
              <textarea
                name="body"
                value={formData.body}
                onChange={handleInputChange}
                required
                className="form-textarea"
                placeholder="Enter post content"
                rows="4"
              />
            </div>

            <div className="form-group">
              <label>User ID:</label>
              <select
                name="userId"
                value={formData.userId}
                onChange={handleInputChange}
                className="form-select"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>User {num}</option>
                ))}
              </select>
            </div>

            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                {editMode ? 'Update Post' : 'Create Post'}
              </button>
              {editMode && (
                <button type="button" onClick={resetForm} className="btn btn-secondary">
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Posts Table */}
        <div className="posts-container">
          <div className="posts-header">
            <h2>Posts ({filteredPosts.length})</h2>
            <button onClick={fetchPosts} className="btn btn-refresh">
              Refresh Posts
            </button>
          </div>

          {currentPosts.length === 0 ? (
            <div className="no-results">
              No posts found. {searchTerm && 'Try a different search term.'}
            </div>
          ) : (
            <>
              <div className="posts-table">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Content</th>
                      <th>User ID</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentPosts.map(post => (
                      <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body.length > 50 ? `${post.body.substring(0, 50)}...` : post.body}</td>
                        <td>{post.userId}</td>
                        <td className="actions">
                          <button
                            onClick={() => handleEdit(post)}
                            className="btn-edit"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deletePost(post.id)}
                            className="btn-delete"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="page-btn"
                  >
                    Previous
                  </button>
                  
                  <span className="page-info">
                    Page {currentPage} of {totalPages}
                  </span>
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="page-btn"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Crud;