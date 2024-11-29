// src/components/AboutUs.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Homepage.css'; // Ensure the path is correct based on your project structure
import { FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa';

const AboutUs = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  // Toggle theme logic
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.className = darkMode ? 'light-mode' : 'dark-mode';
  };

  // Sample team member data
  const teamMembers = [
    {
      name: 'Armaan Singh Chahal',
      studentId: '301559489',
      role: 'Project Manager',
      description: 'Led the project development, coordinated team efforts, and ensured timely delivery.',
      photo: '/images/armaan.jpg', // Place your photo in the public/images directory
    },
    {
      name: 'Andy Bae',
      studentId: '301559490',
      role: 'Lead Developer',
      description: 'Implemented core functionalities, managed the codebase, and integrated APIs.',
      photo: '/images/andy.jpg',
    },
    {
      name: 'Adityapal Singh Waraich',
      studentId: '301559491',
      role: 'UI/UX Designer',
      description: 'Designed user interfaces, enhanced user experience, and created design assets.',
      photo: '/images/aditya.jpg',
    },
    {
      name: 'Gordon Smith',
      studentId: '301559492',
      role: 'QA Engineer',
      description: 'Conducted testing, identified bugs, and ensured product quality and reliability.',
      photo: '/images/gordon.jpg',
    },
  ];

  return (
    <div className="aboutpage-container">
      {/* Navbar */}
      <nav className="navbar">
        {/* Back Button */}
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft size={20} />
        </button>

        {/* Navbar Links and Day-Night Toggle */}
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <button onClick={() => navigate("/home")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/about-us")}>About Us</button>
            </li>
            <li>
              <button onClick={() => navigate("/faq")}>FAQ</button>
            </li>
          </ul>
          <div className="day-night-toggle">
            <button onClick={toggleTheme} className="toggle-button">
              {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="about-content">
        {/* About Section */}
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to ClearWrite! We are a dedicated team of students passionate about creating tools that aid in enhancing writing skills. Our mission is to provide accessible and effective solutions for students and educators alike.
        </p>

        {/* Team Members Section */}
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.photo} alt={`${member.name}`} className="member-photo" />
              <h3 className="member-name">{member.name}</h3>
              <h4 className="member-role">{member.role}</h4>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
