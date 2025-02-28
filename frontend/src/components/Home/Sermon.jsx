import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sermon = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const playlistIds = [
      'PLU0FGMidzthVCrdKJSonrdLq6d2tL5rHi'
    ];

    const fetchPlaylists = async () => {
      try {
        const allPlaylists = await Promise.all(playlistIds.map(async (playlistId) => {
          const response = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=AIzaSyBbh5Z3C7Ga1k-mTwpt-T2tQY_XwmO54iM`);
          const playlistData = await response.json();
          const playlistTitle = playlistData.items[0]?.snippet?.title;

          const videoResponse = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=AIzaSyBbh5Z3C7Ga1k-mTwpt-T2tQY_XwmO54iM`);
          const videoData = await videoResponse.json();
          
          return {
            title: playlistTitle,
            videos: videoData.items
          };
        }));

        setPlaylists(allPlaylists);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  const displayedVideos = playlists.flatMap(playlist => playlist.videos).slice(0, 4); // Limit to 4 videos

  return (
    <div className="container bg-gradient-to-b from-gray-100 to-white text-gray-900 p-6">
      <div className="container mx-auto px-4"> {/* Added container */}
        <h1 className='text-4xl font-bold mb-6 text-center'>Sermon</h1> {/* Centered title */}

        {displayedVideos.length === 0 ? (
          <p className="text-center text-lg">No videos found.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedVideos.map(video => (
              <li key={video.snippet.resourceId.videoId} className="bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1">
                <img
                  src={video.snippet.thumbnails.high.url}
                  alt={video.snippet.title}
                  className="w-full h-52 object-cover rounded-t-lg" // Increased height
                />
                <div className="p-4">
                  <p className="font-semibold line-clamp-2 text-gray-800">{video.snippet.title}</p> {/* Adjusted text color */}
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* View More Button */}
        <div className='flex justify-center mt-6'>
          <Link
            to="/sermon" // Navigate to /sermon
            className='border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 px-4 rounded-md'
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sermon;
