// src/components/AboutUs.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Homepage.css"; // Importing the CSS file for styling the component
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa"; // Importing icons for UI
import GordonPhoto from "../assets/image/gordon.png";
import ArmaanPhoto from "../assets/image/Armaan.png";
import AndyPhoto from "../assets/image/Andy.png";
import AdityaPhoto from "../assets/image/Aditya.png";

const AboutUs = () => {
  const navigate = useNavigate(); // Hook to navigate between pages
  const [darkMode, setDarkMode] = useState(false); // State to track the current theme (dark/light)

  // Function to toggle between light and dark mode
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode); // Update the darkMode state
    document.body.className = darkMode ? "light-mode" : "dark-mode"; // Apply the corresponding class to the body
  };

  // Array of team member data
  const teamMembers = [
    {
      id: "Armaan",
      name: "Armaan Singh Chahal",
      studentId: "301559489",
      role: "UI/UX Developer",
      description:
        "Designed and developed the entire user interface of ClearWrite, ensuring a seamless and intuitive user experience through thoughtful design and responsive layouts. Added responsive buttons and followed heuristics throughout the application.",
      photo: ArmaanPhoto, // Reference to the photo asset
      github: "https://github.com/ArmaanChahal",
    },
    {
      id: "Andy",
      name: "Andy Junhyuk Bae",
      studentId: "301578862",
      role: "Scrum master",
      description:
        "As Scrum Master, I coordinated agile scrum development cycles, managed sprint planning, and fostering effective communication. In addition, I implemented API features and tests using Jest and Postman. I also flexibly worked on the user interface design, node backend architecture, and the project deployment.",
      photo: AndyPhoto,
      github: "https://github.com/Andy-J-B",
    },
    {
      id: "Adit",
      name: "Adityapal Singh Waraich",
      studentId: "301568396",
      role: "CI/CD Integration",
      description:
        "Spearheaded the CI/CD pipeline setup, ensuring seamless integration and deployment processes for the project. Conducted thorough testing to maintain code quality and reliability, leveraging automated testing frameworks. Developed and implemented key APIs, facilitating smooth communication between services and enhancing application functionality.",
      photo: AdityaPhoto,
      github: "https://github.com/AdityapalW",
    },
    {
      id: "Gordon",
      name: "Gordon Cheuk",
      studentId: "301543060",
      role: "API Implementation",
      description:
        "Implemented robust API functionalities, focusing on efficient integration and seamless frontend visualization. Spearheaded the evaluation of API responses to ensure accuracy and enhance user experience.",
      photo: GordonPhoto,
      github: "https://github.com/Grodoe",
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
              <button onClick={() => navigate("/home")}>Home</button>
            </li>
            <li>
              <button onClick={() => navigate("/about-us")}>About Us</button>
            </li>
            <li>
              <button onClick={() => navigate("/faq")}>FAQ</button>
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
          Welcome to ClearWrite! We are a dedicated team of students passionate
          about creating tools that aid in enhancing writing skills. Our mission
          is to provide accessible and effective solutions for students and
          educators alike.
        </p>

        {/* Team Members Section */}
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-members">
          {/* Iterating through the teamMembers array to display individual cards */}
          {teamMembers.map((member, index) => (
            <a
              href={member.github} // GitHub repository link
              target="_blank"
              rel="noopener noreferrer" // Prevent security risks
              key={index}
              className="member-card-link"
            >
              <div className="member-card" key={index} id={member.id}>
                <img
                  src={member.photo}
                  alt={`${member.name}`}
                  className="member-photo"
                />
                <h3 className="member-name">{member.name}</h3>
                <h4 className="member-role">{member.role}</h4>
                <p className="member-description">{member.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
