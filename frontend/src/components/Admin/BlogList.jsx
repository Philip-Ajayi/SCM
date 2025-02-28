import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleEditClick = (blog) => {
    setSelectedBlog(blog);
    setTitle(blog.title);
    setContent(blog.content);
    setImage(null);
    setIsEditing(true);
  };

  const handleUpdate = async () => {
    // Validate required fields
    if (!title || !content) {
      alert('Title and content are required.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      await axios.put(`/api/blogs/${selectedBlog._id}`, formData);
      setBlogs(blogs.map(b => (b._id === selectedBlog._id ? { ...b, title, content, image: image ? URL.createObjectURL(image) : b.image } : b)));
      setIsEditing(false);
      setSelectedBlog(null);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
      setShowConfirm(false);
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  // Filtered blogs based on search term
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog List</h1>
      
      {/* Search Bar */}
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded-lg p-2 w-1/3"
        />
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border-b p-4 text-left">Image</th>
              <th className="border-b p-4 text-left">Title</th>
              <th className="border-b p-4 text-left">Date</th>
              <th className="border-b p-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map((blog) => (
              <tr key={blog._id}>
                <td className="border-b p-4">
                  <img src={blog.image} alt={blog.title} className="h-16 w-16 object-cover" />
                </td>
                <td className="border-b p-4">{blog.title}</td>
                <td className="border-b p-4">{new Date(blog.createdAt).toLocaleDateString()}</td>
                <td className="border-b p-4">
                  <button onClick={() => handleEditClick(blog)} className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-700 mr-2">Update</button>
                  <button onClick={() => { setDeleteId(blog._id); setShowConfirm(true); }} className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-700">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {isEditing && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Update Blog</h2>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              placeholder="Title" 
              className="border rounded-lg p-2 w-full mb-4" 
              required 
            />
            <ReactQuill value={content} onChange={setContent} className="mb-4" />
            <input 
              type="file" 
              onChange={(e) => setImage(e.target.files[0])} 
              className="mb-4" 
            />
            <button onClick={handleUpdate} className="bg-green-500 text-white py-1 px-4 rounded hover:bg-green-700">Update</button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-300 text-black py-1 px-4 rounded hover:bg-gray-400 ml-2">Cancel</button>
          </div>
        </div>
      )}

      {showConfirm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this blog?</p>
            <div className="mt-4">
              <button onClick={() => handleDelete(deleteId)} className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-700">Delete</button>
              <button onClick={() => setShowConfirm(false)} className="bg-gray-300 text-black py-1 px-4 rounded hover:bg-gray-400 ml-2">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
