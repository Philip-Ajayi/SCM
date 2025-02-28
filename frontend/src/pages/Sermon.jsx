import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';

// Configure React Modal
ReactModal.setAppElement('#root');

const Sermon = () => {
  const [playlists, setPlaylists] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const playlistIds = [
      'PLU0FGMidzthVCrdKJSonrdLq6d2tL5rHi',
    ];

    const fetchPlaylists = async () => {
      try {
        const allPlaylists = await Promise.all(
          playlistIds.map(async (playlistId) => {
            const response = await fetch(
              `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=AIzaSyBbh5Z3C7Ga1k-mTwpt-T2tQY_XwmO54iM`
            );
            const playlistData = await response.json();

            const playlistTitle = playlistData.items[0]?.snippet?.title;

            // Fetch all videos from the playlist
            const videoResponse = await fetch(
              `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=AIzaSyBbh5Z3C7Ga1k-mTwpt-T2tQY_XwmO54iM`
            );
            const videoData = await videoResponse.json();

            let allVideos = videoData.items;
            let nextPageToken = videoData.nextPageToken;

            while (nextPageToken) {
              const nextResponse = await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&pageToken=${nextPageToken}&key=AIzaSyBbh5Z3C7Ga1k-mTwpt-T2tQY_XwmO54iM`
              );
              const nextData = await nextResponse.json();
              allVideos = [...allVideos, ...nextData.items];
              nextPageToken = nextData.nextPageToken;
            }

            return {
              title: playlistTitle,
              videos: allVideos,
            };
          })
        );

        setPlaylists(allPlaylists);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    };

    fetchPlaylists();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedVideo(null);
  };

  const filteredPlaylists = playlists.map((playlist) => ({
    ...playlist,
    videos: playlist.videos.filter((video) =>
      video.snippet.title.toLowerCase().includes(searchQuery)
    ),
  }));

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 pt-24">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Sermon</h1>
        <input
          type="text"
          placeholder="Search videos..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-1/2 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </header>

      <main className="p-6">
        {filteredPlaylists.length === 0 ? (
          <p className="text-center text-lg">No videos found.</p>
        ) : (
          filteredPlaylists.map((playlist) => (
            <section key={playlist.title} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{playlist.title}</h2>

              <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {playlist.videos.map((video) => (
                  <li
                    key={video.snippet.resourceId.videoId}
                    onClick={() => handleVideoClick(video)}
                    className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1"
                  >
                    <LazyLoadImage video={video} />
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}

        {selectedVideo && (
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            className="modal w-full max-w-4xl bg-white p-0 rounded-lg shadow-lg mt-20"
            overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
          >
            <h2 className="text-xl font-bold mb-4 p-4">{selectedVideo.snippet.title}</h2>
            <button
              onClick={handleCloseModal}
              className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600 mb-4"
            >
              Close
            </button>
            <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.snippet.resourceId.videoId}`}
                title={selectedVideo.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </ReactModal>
        )}
      </main>
    </div>
  );
};

const LazyLoadImage = ({ video }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Stop observing once loaded
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div ref={ref}>
      {isVisible ? (
        <>
          <img
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            className="w-full h-52 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <p className="font-semibold line-clamp-2">{video.snippet.title}</p>
          </div>
        </>
      ) : (
        <div className="w-full h-52 bg-gray-300 rounded-t-lg animate-pulse" />
      )}
    </div>
  );
};

export default Sermon;
