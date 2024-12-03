// src/components/AboutUs.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Homepage.css'; // Ensure the path is correct based on your project structure
import { FaArrowLeft, FaSun, FaMoon } from 'react-icons/fa';
import GordonPhoto from '../assets/image/Gordon.png';
import ArmaanPhoto from '../assets/image/Armaan.png';
import AndyPhoto from '../assets/image/Andy.png';
import AdityaPhoto from '../assets/image/Aditya.png';

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
      role: 'UI/UX Developer',
      description:
        'Designed and developed the entire user interface of ClearWrite, ensuring a seamless and intuitive user experience through thoughtful design and responsive layouts. Added responsive buttons and followed heuristics throughout the application.',
      photo: ArmaanPhoto,
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
      studentId: '301559492',
      role: 'API Implementation',
      description: 'Implemented API functionalities, conducted testing, and ensured integration quality.',
      photo: GordonPhoto,
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
              <button onClick={() => navigate('/home')}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate('/about-us')}>About Us</button>
            </li>
            <li>
              <button onClick={() => navigate('/faq')}>FAQ</button>
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
