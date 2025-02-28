import React, { useState } from "react"; 
import {
  FaFacebook,
  FaInstagram,
  FaSoundcloud,
  FaYoutube,
  FaSpotify,
  FaPodcast,
  FaPhone,
  FaHome,
} from "react-icons/fa";
import Logo from '../../assets/logoo.png'; // Updated logo import
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from 'react-router-dom'; // Import Link from React Router

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter your email.");
      return;
    }

    try {
      const response = await axios.post("/api/subscribe", { email });
      setMessage(response.data.message);
      setEmail("");
    } catch (error) {
      setMessage("Error subscribing to the newsletter.");
    }
  };

  return (
    <footer className="bg-gray-900 pt-12 pb-8 text-white"> {/* Added background color */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Newsletter section */}
          <div className="mb-8 sm:mb-0">
            <h2 className="text-2xl font-bold">Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubscribe} className="flex flex-col mt-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-2 rounded-md border border-gray-300 bg-gray-800 text-white placeholder:text-gray-400" // Updated styles
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="mt-2 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md"
              >
                Subscribe
              </button>
              {message && <p className="mt-2 text-red-400">{message}</p>}
            </form>
          </div>

          {/* Company details section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <img src={Logo} alt="Logo" className="max-w-[100px] invert" /> {/* Updated logo */}
            <div>
              <p className="flex items-center gap-2">
                <FaPhone />
                585 210 5038
              </p>
              <p className="flex items-center gap-2 mt-2">
                <FaHome />
                1400 Leigh Station Road, Rochester, NY 14467
              </p>
            </div>
          </motion.div>

          {/* Footer Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-6"
          >            
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/ministers">2024 Ministers</Link>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/hospitality">2024 Hospitality</Link>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/registration">2024 Registration</Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/live">Watch Live</Link>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/sermon">Sermon</Link>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/give">Give</Link>
                    </li>
                    <li className="hover:text-blue-400 cursor-pointer">
                      <Link to="/books">Books</Link>
                    </li>
                  </ul>
                </div>
              </div>

          </motion.div>

          {/* Social Links section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-3xl font-bold">Follow us</h1>
            <div className="flex items-center gap-3">
              <a href="https://m.facebook.com/100094661213633/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl hover:scale-105 duration-300 text-white" />
              </a>
              <a href="https://www.instagram.com/Supernaturalcommunitychurch" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl hover:scale-105 duration-300 text-white" />
              </a>
              <a href="https://on.soundcloud.com/HKuFphonxKCqgoxq8" target="_blank" rel="noopener noreferrer">
                <FaSoundcloud className="text-3xl hover:scale-105 duration-300 text-white" />
              </a>
              <a href="https://youtube.com/@supernaturalcommunitychurch?si=4IRK610dQTy3EVjW" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-3xl hover:scale-105 duration-300 text-white" />
              </a>
              <a href="https://open.spotify.com/show/1Z6rvc2qPF5aagpPq9D4uu?si=edd4760f3100410b&nd=1&utm_medium=organic&product=open&%24full_url=https%3A%2F%2Fopen.spotify.com%2Fshow%2F1Z6rvc2qPF5aagpPq9D4uu%3Fsi%3Dedd4760f3100410b&%24android_redirect_timeout=3000&feature=organic&_branch_match_id=1365261672710906072&_branch_referrer=H4sIAAAAAAAAA7WNwWrDMBBEv0Y%2B2rLluLQgQiEYesu5F7OWVraILCkrKaGXfnvtQj%2BhMDAww%2BOtOcf01jQphmzNVw0x1s76W3OOFHRRWYaIvmJdb4pzUyEn1wNh4p11457jrv9oFbZ9Smt47tV%2BDvRQ3f06ngCWeL2%2FXvpSmBiTZeKCWvcvAzei5bxv%2BfyrAOdmULd%2F1LBu8Hrf28MHXlOweiLUllDlKdsNQ8lScM4rg5ALoQy0gLeq%2BiY0SGT9Ms0UnglJfviUYSHYfgAA3FtIRwEAAA%3D%3D" target="_blank" rel="noopener noreferrer">
                <FaSpotify className="text-3xl hover:scale-105 duration-300 text-white" />
              </a>
              <a href="https://podcasts.apple.com/us/podcast/supernatural-community-church/id1688783080" target="_blank" rel="noopener noreferrer">
                <FaPodcast className="text-3xl hover:scale-105 duration-300 text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright section */}
        <p className="text-center mt-8 border-t-2 border-white/40 pt-8">
          Copyright &copy; 2024. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
