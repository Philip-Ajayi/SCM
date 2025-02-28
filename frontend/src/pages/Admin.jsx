import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import RegisterationList from '../components/Admin/RegisterationList';
import BlogList from '../components/Admin/BlogList';
import BlogForm from '../components/Admin/BlogForm';
import Registrationcheck from '../components/Admin/Registrationcheck';
import Checkedin from '../components/Admin/Checkedin';



const Admin = () => {
  const [user, setUser] = useState(null);
  const [activeComponent, setActiveComponent] = useState(null);
  const [message, setMessage] = useState("");

  const googleProvider = new GoogleAuthProvider();

  const accessControl = {
    Check: ["skylightbridge059@gmail.com", "iyunademadebowale@gmail.com", "ncthatsme1@gmail.com", "abike2919@gmail.com"],
    Update: ["skylightbridge059@gmail.com", "iyunademadebowale@gmail.com", "ncthatsme1@gmail.com", "abike2919@gmail.com"],
    Post: ["skylightbridge059@gmail.com", "iyunademadebowale@gmail.com", "ncthatsme1@gmail.com", "abike2919@gmail.com"],
    Checkin: ["skylightbridge059@gmail.com", "iyunademadebowale@gmail.com", "ncthatsme1@gmail.com", "abike2919@gmail.com"],
    CheckedInList: ["skylightbridge059@gmail.com", "iyunademadebowale@gmail.com", "ncthatsme1@gmail.com", "abike2919@gmail.com"],
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
    setActiveComponent(null);
    setMessage("");
  };

  const handleMenuClick = (menu) => {
    if (!user) return;

    // Check if the user's email is in the specific menu's access list
    if (accessControl[menu]?.includes(user.email)) {
      setActiveComponent(menu);
      setMessage("");
    } else {
      // User is logged in but does not have access to this specific menu
      setMessage("You have no access");
      setActiveComponent(null);
    }
  };

  const renderActiveComponent = () => {
    if (!user) {
      return <p>Please sign in to access the menu.</p>; // Message for logged-out users
    }

    switch (activeComponent) {
      case "Check":
        return <RegisterationList />;
      case "Update":
        return <BlogList />;
      case "Post":
        return <BlogForm />;
      case "Checkin":
        return <Registrationcheck />; 
      case "CheckedInList":
        return <Checkedin />; 
      default:
        return <p>{message || "Click on a menu"}</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col mt-20"> {/* Increased margin to mt-20 */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">
            Welcome to Admin Dashboard{user && `, ${user.displayName}`}!
          </h1>
          {!user ? (
            <button 
              onClick={handleSignIn}
              className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300"
            >
              Sign in with Google
            </button>
          ) : (
            <button 
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition duration-300"
            >
              Sign Out
            </button>
          )}
        </div>
  
        {user && (
          <div className="text-center space-x-4">
            <button 
              onClick={() => handleMenuClick("Check")}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Check Registered
            </button>
            <button 
              onClick={() => handleMenuClick("Update")}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Update Blog
            </button>
            <button 
              onClick={() => handleMenuClick("Post")}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Post Blog
            </button>
            <button 
              onClick={() => handleMenuClick("Checkin")}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Clock In
            </button>
            <button 
              onClick={() => handleMenuClick("CheckedInList")}
              className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300"
            >
              Checked In List
            </button>
          </div>
        )}
  
        <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );  
};
export default Admin;
