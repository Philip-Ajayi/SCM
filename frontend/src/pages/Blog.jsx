import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  // Fetch data when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('/api/blogs');
        setBlogs(response.data);
        setFilteredBlogs(response.data); // Initially set filteredBlogs to all blogs
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []); // Empty dependency array ensures this runs only on mount

  // Update filtered blogs based on search term
  useEffect(() => {
    const results = blogs.filter(blog =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(results);
  }, [searchTerm, blogs]); // Run this effect when searchTerm or blogs change

  return (
    <div className="container mx-auto p-4 mt-32"> {/* Added mt-32 for large top margin */}
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>

      <div className="flex justify-between mb-4">
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded-lg p-2 w-full"
          />
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredBlogs.map((blog) => (
            <div key={blog._id} className="border rounded-lg overflow-hidden shadow-md">
              <Link to={`/blog/${blog._id}`}>
                <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-bold">{blog.title}</h2>
                  <p className="text-gray-600">{new Date(blog.createdAt).toLocaleDateString()}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
