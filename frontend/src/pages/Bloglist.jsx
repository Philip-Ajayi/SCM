import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Bloglist = () => {
  const { id } = useParams(); // Get the blog ID from the URL
  const [blog, setBlog] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  if (!blog) return <p>Blog not found.</p>;

  return (
    <div className="container mx-auto px-4 py-20"> {/* Adjusted top padding to drop section down */}
      <div className="mx-auto max-w-4xl bg-white p-6 shadow-lg rounded-md"> {/* Centered and proportional container */}

        {/* Image first, enlarged */}
        <div className="w-full mb-6">
          <img 
            src={`${import.meta.env.VITE_API_URL}/${blog.image}`} 
            alt={blog.title} 
            className="w-full h-auto rounded-md object-cover" 
          />
        </div>

        {/* Title in the center */}
        <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>

        {/* Text content */}
        <div className="text-lg text-gray-700 prose max-w-none">
          <div dangerouslySetInnerHTML={{ __html: blog.content }} /> {/* Render HTML content */}
        </div>

      </div>
    </div>
  );
};

export default Bloglist;
