import React from 'react';
import { useParams } from 'react-router-dom'; 
import { speakers } from '../Preview/Content'; // Ensure this path is correct

const Content = () => {
  const { id } = useParams();
  const speaker = speakers.find(s => s.name.replace(/\s+/g, '-').toLowerCase() === id); // Find speaker by formatted name

  if (!speaker) {
    return <p className="text-center text-red-500 text-xl">Speaker not found</p>;
  }
  
  return (
    <div className="container mx-auto p-5">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Image */}
        <div className="flex-shrink-0 w-3/4 lg:w-1/3 mb-4 lg:mb-0">
          <img 
            src={speaker.imgUrl} 
            alt={speaker.name} 
            className="w-full rounded-lg shadow-md" 
          />
        </div>
        
        {/* Speaker Info */}
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-6">{speaker.name}</h2>
          {speaker.title && (
            <p className="text-gray-600 mb-4 font-semibold">{speaker.title}</p>
          )}
          {/* Loop through the bio array to display multiple paragraphs */}
          {speaker.bio.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
