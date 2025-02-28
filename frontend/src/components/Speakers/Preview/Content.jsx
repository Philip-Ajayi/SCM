import React from 'react';
import Ayo from '../../../assets/Teaching2.jpg'; // Ensure this path is correct

// Sample data for speakers
export const speakers = [
  {
    imgUrl: Ayo,
    name: 'Ayo Benson',
  },
  {
    imgUrl: 'https://m.media-amazon.com/images/I/A1QosRMv55L._SY450_CR112%2C0%2C450%2C450_.jpg',
    name: 'Chris Segun Onayinka',
    title: 'Senior Pastor of Saints Community Church',
    // Removed the bio property
  },
];

const Content = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="text-lg text-center mb-4">
        Meet our distinguished speakers who will be sharing their insights and experiences at the event. 
        Each speaker brings a unique perspective and depth of knowledge to inspire and empower you.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map((speaker, index) => (
          <div 
            key={index} 
            className="border border-gray-300 rounded-lg shadow-lg p-4 flex flex-col items-stretch"
          >
            <div className="flex-1 w-full h-full">
              <img 
                src={speaker.imgUrl} 
                alt={speaker.name} 
                className="w-full h-full object-cover mb-4 rounded-lg"
              />
            </div>
            <div className="flex flex-col items-center text-center mt-4">
              <h2 className="text-xl font-semibold mb-2">{speaker.name}</h2>
              {speaker.title && (
                <p className="text-gray-600 mb-4">{speaker.title}</p>
              )}
              {/* Removed the See Bio link */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
