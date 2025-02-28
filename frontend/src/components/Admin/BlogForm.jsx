import React, { useState } from 'react'; 
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    if (!title || !content || !image) {
      setError('All fields are required');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('image', image);

    try {
      await axios.post('/api/blogs', formData);
      setMessage('Blog posted successfully!');
      // Reset form fields
      setTitle('');
      setContent('');
      setImage(null);
    } catch (err) {
      setError('Error posting blog. Please try again.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6">
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded p-2 mb-4 w-full"
        />
        <ReactQuill value={content} onChange={setContent} className="mb-4" />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="mb-4 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">
          Post Blog
        </button>
        {message && <p className="mt-4 text-green-500 text-center">{message}</p>}
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
};

export default BlogForm;
