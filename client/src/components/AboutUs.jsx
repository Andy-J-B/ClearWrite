/*
 *** AboutUs.jsx
 ***
 *** Description: 
 *** This component represents the "About Us" page of the application. 
 *** It introduces the ClearWrite team and their respective roles and contributions.
 ***
 *** Features:
 *** - Displays a detailed overview of each team member.
 *** - Includes a theme toggle (Light/Dark mode) with state management.
 *** - Provides navigation links to other sections of the application (Home, About Us, FAQ).
 *** - Implements responsive and accessible design.
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Homepage.css'; // Importing the CSS file for styling the component
import { FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa'; // Importing icons for UI
import GordonPhoto from '../assets/image/Gordon.png';
import ArmaanPhoto from '../assets/image/Armaan.png';
import AndyPhoto from '../assets/image/Andy.png';
import AdityaPhoto from '../assets/image/Aditya.png';

const AboutUs = () => {
  const navigate = useNavigate(); // Hook to navigate between pages
  const [darkMode, setDarkMode] = useState(false); // State to track the current theme (dark/light)

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); // Update the darkMode state
    document.body.className = darkMode ? 'light-mode' : 'dark-mode'; // Apply the corresponding class to the body
  };

  // Array of team member data
  const teamMembers = [
    {
      name: 'Armaan Singh Chahal',
      studentId: '301559489',
      role: 'UI/UX Developer',
      description:
        'Designed and developed the entire user interface of ClearWrite, ensuring a seamless and intuitive user experience through thoughtful design and responsive layouts. Added responsive buttons and followed heuristics throughout the application.',
      photo: ArmaanPhoto, // Reference to the photo asset
    },
    {
      name: 'Andy Junhyuk Bae',
      studentId: '301578862',
      role: 'Scrum master',
      description:
        'Implemented TextGears API features and tests using Jest and Postman. As Scrum Master, coordinated agile scrum development cycles, setting deadlines, and fostering effective communication. Flexibly worked on user interface design, backend architecture, and project deployment.',
      photo: AndyPhoto,
    },
    {
      name: 'Adityapal Singh Waraich',
      studentId: '301568396',
      role: 'CI/CD Integration',
      description:
        'Spearheaded the CI/CD pipeline setup, ensuring seamless integration and deployment processes for the project. Conducted thorough testing to maintain code quality and reliability, leveraging automated testing frameworks. Developed and implemented key APIs, facilitating smooth communication between services and enhancing application functionality.',
      photo: AdityaPhoto,
    },
    {
      name: 'Gordon Cheuk',
      studentId: '301543060',
      role: 'API Implementation',
      description: 'Implemented API functionalities, conducted testing, and ensured integration quality.',
      photo: GordonPhoto,
    },
  ];

  return (
    <div className="aboutpage-container">
      {/* Navbar Section */}
      <nav className="navbar">
        {/* Back Button to navigate to the previous page */}
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft size={20} />
        </button>

        {/* Navbar Links and Theme Toggle */}
        <div className="navbar-right">
          <ul className="navbar-links">
            {/* Navigation links */}
            <li>
              <button onClick={() => navigate('/home')}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate('/about-us')}>About Us</button>
            </li>
            <li>
              <button onClick={() => navigate('/faq')}>FAQ</button>
            </li>
          </ul>
          {/* Day-Night Mode Toggle Button */}
          <div className="day-night-toggle">
            <button onClick={toggleTheme} className="toggle-button">
              {darkMode ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Section */}
      <div className="about-content">
        {/* About Us Introduction */}
        <h1 className="about-title">About Us</h1>
        <p className="about-description">
          Welcome to ClearWrite! We are a dedicated team of students passionate about creating tools that aid in enhancing writing skills. Our mission is to provide accessible and effective solutions for students and educators alike.
        </p>

        {/* Team Members Section */}
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-members">
          {/* Iterating through the teamMembers array to display individual cards */}
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
