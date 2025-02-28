import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/logoo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const menuItems = [
    { name: 'About', path: '/about' },
    {
      name: '2024',
      path: '#',
      dropdown: [
        { name: 'Speakers', path: '/ministers' },
        { name: 'Hospitality', path: '/hospitality' },
        { name: 'Registration', path: '/registration' }
      ]
    },
    {
      name: 'Resources',
      path: '#',
      dropdown: [
        { name: 'Sermon', path: '/sermon' },
        { name: 'Books', path: '/books' },
        { name: 'Blog', path: '/blog' }
      ]
    },
    { name: 'Contact', path: '/contact' },
    {
      name: 'Watch Live',
      path: '/live',
      icon: <BsFillCameraVideoFill className="inline-block text-red-500 ml-1" size={20} />
    },
    {
      name: 'Give',
      path: '/give',
      isBoxed: true
    }
  ];

  return (
    <header className="absolute w-full z-50 top-0 bg-transparent shadow-none"> {/* Make header fully transparent */}
      <div className="container mx-auto flex justify-between items-center p-4"> {/* Remove padding for a tighter fit */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Supernatural Community Church Logo" className="h-14" />
          <span className="ml-2 text-2xl font-bold">SCC</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Mobile Sidebar */}
        {isOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 md:hidden">
            <div className="bg-white w-48 h-full fixed right-0 shadow-lg">
              <div className="flex justify-between items-center p-4">
                <h2 className="text-lg font-bold">Menu</h2>
                <FaTimes size={24} onClick={toggleMenu} className="cursor-pointer" />
              </div>
              <ul className="flex flex-col space-y-4 p-4 font-bold">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    {item.dropdown ? (
                      <>
                        <div
                          className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-red-500"
                          onClick={() => toggleDropdown(index)}
                        >
                          {item.name}
                          <span className="ml-2">{activeDropdown === index ? '▲' : '▼'}</span>
                        </div>
                        <ul
                          className={`${activeDropdown === index ? 'block' : 'hidden'} bg-gray-100 mt-2 rounded-md p-2`}
                        >
                          {item.dropdown.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <Link 
                                to={dropdownItem.path} 
                                className="text-gray-700 hover:text-red-500 block"
                                onClick={handleLinkClick}
                              >
                                {dropdownItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className={`text-gray-700 hover:text-red-500 ${item.isBoxed ? 'bg-red-500 text-white px-4 py-2 rounded-md' : ''}`}
                        onClick={handleLinkClick}
                      >
                        {item.icon ? (
                          <>
                            {item.name} {item.icon}
                          </>
                        ) : (
                          item.name
                        )}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-8 font-bold">
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                {item.dropdown ? (
                  <div
                    className="flex justify-between items-center cursor-pointer text-gray-700 hover:text-red-500"
                    onClick={() => toggleDropdown(index)}
                  >
                    {item.name}
                    <span className="ml-2">{activeDropdown === index ? '▲' : '▼'}</span>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-red-500 ${item.isBoxed ? 'bg-red-500 text-white px-4 py-2 rounded-md' : ''}`}
                    onClick={handleLinkClick}
                  >
                    {item.icon ? (
                      <>
                        {item.name} {item.icon}
                      </>
                    ) : (
                      item.name
                    )}
                  </Link>
                )}
                {item.dropdown && activeDropdown === index && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 space-y-2">
                    {item.dropdown.map((dropdownItem, idx) => (
                      <li key={idx} className="px-4 py-2">
                        <Link 
                          to={dropdownItem.path} 
                          className="text-gray-700 hover:text-red-500 block"
                          onClick={handleLinkClick}
                        >
                          {dropdownItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
