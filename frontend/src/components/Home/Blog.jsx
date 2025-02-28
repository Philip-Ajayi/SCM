import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blog data from the API
  useEffect(() => {
    axios.get('/api/blogs')
      .then(response => setBlogs(response.data.splice(0, 4))) // Limit to 4 blogs
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Centered Header */}
      <h2 className="text-3xl font-bold text-center mb-8">News</h2>

      {/* Grid: Use 2-column layout on small screens, 4-column on larger screens */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col items-center">
            <img 
              src={`/${blog.image}`}  // Use the full path as provided
              alt={blog.title} 
              className="w-full h-52 rounded-md mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{blog.title}</h3>

            {/* View Article Link */}
            <Link to={`/blog/${blog._id}`}>
              <button className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 px-4 rounded-md mt-4">
                View Article
              </button>
            </Link>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <Link to="/blog"> {/* Changed to "/blog" */}
          <button className="border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 px-4 rounded-md">
            View More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
