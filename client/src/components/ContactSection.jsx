// src/components/ContactSection.jsx

import { FaEnvelope } from "react-icons/fa"; // Import email icon from react-icons for visual representation

const ContactSection = () => {
  return (
    // Main container for the contact section
    <div className="contact-section">
      {/* Introductory text prompting users to reach out */}
      <p>
        If you have more questions, please feel free to reach out to any of the
        team members:
      </p>

      {/* List of team members and their contact emails */}
      <ul className="team-emails">
        {/* Contact details for Armaan */}
        <li>
          {/* Envelope icon with a specific style */}
          <FaEnvelope style={{ marginRight: "8px", color: "#f94d6a" }} />
          <strong>Armaan:</strong>{" "}
          <a href="mailto:asc36@sfu.ca">asc36@sfu.ca</a>
        </li>

        {/* Contact details for Andy */}
        <li>
          <FaEnvelope style={{ marginRight: "8px", color: "#f94d6a" }} />
          <strong>Andy:</strong>{" "}
          <a href="mailto:jba168@sfu.ca">jba168@sfu.ca</a>
        </li>

        {/* Contact details for Adityapal */}
        <li>
          <FaEnvelope style={{ marginRight: "8px", color: "#f94d6a" }} />
          <strong>Adityapal:</strong>{" "}
          <a href="mailto:asw18@sfu.ca">asw18@sfu.ca</a>
        </li>

        {/* Contact details for Gordon */}
        <li>
          <FaEnvelope style={{ marginRight: "8px", color: "#f94d6a" }} />
          <strong>Gordon:</strong>{" "}
          <a href="mailto:gkc23@sfu.ca">gkc23@sfu.ca</a>
        </li>

        {/* Placeholder for adding more team members */}
        {/* Add more team members as needed */}
      </ul>
    </div>
  );
};

export default ContactSection; // Export the ContactSection component for use in other parts of the application
