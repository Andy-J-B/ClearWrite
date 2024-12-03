// src/components/ContactSection.jsx

import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <p>If you have more questions, please feel free to reach out to any of the team members:</p>
      <ul className="team-emails">
        <li>
          <FaEnvelope style={{ marginRight: '8px', color: '#f94d6a' }} />
          <strong>Armaan:</strong> <a href="mailto:asc36@sfu.ca">asc36@sfu.ca</a>
        </li>
        <li>
          <FaEnvelope style={{ marginRight: '8px', color: '#f94d6a' }} />
          <strong>Andy:</strong> <a href="mailto:andy@example.com">andy@example.com</a>
        </li>
        <li>
          <FaEnvelope style={{ marginRight: '8px', color: '#f94d6a' }} />
          <strong>Adityapal:</strong> <a href="mailto:asw18@sfu.ca">asw18@sfu.ca</a>
        </li>
        <li>
          <FaEnvelope style={{ marginRight: '8px', color: '#f94d6a' }} />
          <strong>Gordon:</strong> <a href="mailto:gkc23@sfu.ca">gkc23@sfu.ca</a>
        </li>
        {/* Add more team members as needed */}
      </ul>
    </div>
  );
};

export default ContactSection;
