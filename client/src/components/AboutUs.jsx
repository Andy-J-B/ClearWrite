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

import "../css/Homepage.css"; // Importing the CSS file for styling the component
import GordonPhoto from "../assets/image/gordon.png";
import ArmaanPhoto from "../assets/image/Armaan.png";
import AndyPhoto from "../assets/image/Andy.png";
import AdityaPhoto from "../assets/image/Aditya.png";
import { Navbar } from "./Navbar";

const AboutUs = () => {
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
      <Navbar />

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
