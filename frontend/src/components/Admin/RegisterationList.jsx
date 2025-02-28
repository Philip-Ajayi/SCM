import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const RegistrationList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const loadRef = useRef(null);

  const loadUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/register');
      setUsers(response.data);
      setHasLoaded(true);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasLoaded) {
            loadUsers();
            observer.unobserve(loadRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (loadRef.current) {
      observer.observe(loadRef.current);
    }

    return () => {
      if (loadRef.current) {
        observer.unobserve(loadRef.current);
      }
    };
  }, [hasLoaded]);

  // Filter users based on search query
  const filteredUsers = users.filter(user => {
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Registered Users</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by Name or Phone"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-lg p-2 pl-10"
          />
          <svg
            className="absolute left-2 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M16.65 11.65A7.5 7.5 0 1111.65 4.65a7.5 7.5 0 014.95 13"
            />
          </svg>
        </div>
      </div>
      <div className="text-right mb-4">
        <span className="font-bold">{filteredUsers.length} users registered</span>
      </div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="border-b p-4 text-left">Name</th>
            <th className="border-b p-4 text-left">Phone Number</th>
            <th className="border-b p-4 text-left">Email</th>
            <th className="border-b p-4 text-left">Location</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="4" className="text-center p-4">Loading...</td>
            </tr>
          ) : (
            filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="border-b p-4">{user.name}</td>
                <td className="border-b p-4">{user.phone}</td>
                <td className="border-b p-4">{user.email}</td>
                <td className="border-b p-4">{user.location}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      {/* Ref for Intersection Observer */}
      <div ref={loadRef} className="h-10"></div>
    </div>
  );
};

export default RegistrationList;
