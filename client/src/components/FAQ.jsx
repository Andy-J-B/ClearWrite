/*
 *** FAQ.jsx
 ***
 *** Description:
 *** This component serves as the Frequently Asked Questions (FAQ) page for ClearWrite.
 *** It provides users with key information about ClearWrite's features, usage, and privacy policies.
 *** The page includes images, step-by-step guides, and a contact section for further assistance.
 ***
 *** Features:
 *** - Displays key questions and answers about ClearWrite, including features, usage, and privacy.
 *** - Includes visual aids (images) for better understanding of key features and usage instructions.
 *** - Provides a step-by-step guide to help users get started with ClearWrite.
 *** - Includes a reusable `ContactSection` component for users seeking additional assistance.
 *** - Allows toggling between Light and Dark modes.
 *** - Provides navigation links to other sections of the app, including the Home page.
 ***
 *** Components:
 *** - `ContactSection`: A reusable component that provides contact information for user inquiries.
 *** - `Navbar`: The navigation bar that allows users to navigate between pages.
 ***
 *** Key Functions:
 *** - The page includes various questions such as "What is ClearWrite?", "How do I get started?", and more.
 *** - Each question has corresponding answers and visual aids (images).
 *** - Users are provided with step-by-step guides, including how to use ClearWrite and its features.
 ***
 *** Styling:
 *** - The FAQ page is styled using the CSS file `Homepage.css`, ensuring consistency across the app.
 *** - Images are loaded lazily to optimize page loading times.
 ***
 *** Notes:
 *** - The FAQ page is part of the app’s informative section, providing essential information to users.
 *** - The page is structured to ensure easy navigation and clarity of information.
 *** - Ensure that images like `faqOverview`, `faqGettingStarted`, and `faqFeatures` are optimized for fast loading.
 ***
 */

import React from "react"; // Import React to create the FAQ component
import "../css/Homepage.css"; // Import CSS for styling
import faqOverview from "../assets/image/faq-clearwrite-overview.png"; // Import image for FAQ section
import faqGettingStarted from "../assets/image/faq-getting-started.png"; // Import image for "Getting Started" section
import faqFeatures from "../assets/image/faq-features.png"; // Import image for features section
import ContactSection from "./ContactSection"; // Import the Contact Section component
import { Navbar } from "./Navbar";

const FAQ = () => {
  return (
    // Main container for the FAQ page
    <div className="aboutpage-container">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="about-content">
        {/* FAQ Header */}
        <h1 className="about-title">Frequently Asked Questions</h1>
        {/* Question 1 */}
        <div className="faq-item">
          <h2 className="section-title">1. What is ClearWrite?</h2>
          {/* Explanation of ClearWrite's purpose */}
          <p className="section-description">
            ClearWrite is a free, real-time writing assistant designed to help
            students improve their essays by providing instant feedback on
            grammar, readability, and overall writing quality.
          </p>
          {/* Image showcasing ClearWrite's overview */}
          <img
            src={faqOverview}
            alt="ClearWrite Overview Screenshot"
            className="faq-image"
            loading="lazy"
          />
        </div>
        {/* Question 2 */}
        <div className="faq-item">
          <h2 className="section-title">
            2. How do I get started with ClearWrite?
          </h2>
          {/* Step-by-step guide for new users */}
          <p className="section-description">
            Getting started is easy! Follow these simple steps:
          </p>
          <img
            src={faqGettingStarted}
            alt="Getting Started with ClearWrite Screenshot"
            className="faq-image"
            loading="lazy"
          />
          {/* Ordered list of instructions */}
          <ol className="how-to-use-list">
            <li>
              <strong>Visit the Home Page:</strong> Navigate to the ClearWrite
              home page where you can access the essay input section.
            </li>
            <li>
              <strong>Enter Your Essay:</strong> Type or paste your essay,
              paragraph, or sentence into the provided text box.
            </li>
            <li>
              <strong>Click &quot;Evaluate&quot;:</strong> Press the
              &quot;Evaluate&quot; button to start the analysis.
            </li>
            <li>
              <strong>View Feedback:</strong> Review the grammatical
              corrections, readability scores, and other suggestions provided by
              ClearWrite.
            </li>
            <li>
              <strong>Revise Your Writing:</strong> Use the feedback to make
              improvements to your essay.
            </li>
          </ol>
        </div>
        {/* Question 3 */}
        <div className="faq-item">
          <h2 className="section-title">
            3. What features does ClearWrite offer?
          </h2>
          {/* List of ClearWrite's core features */}
          <p className="section-description">
            ClearWrite offers a range of features to enhance your writing:
          </p>
          <img
            src={faqFeatures}
            alt="ClearWrite Features Screenshot"
            className="faq-image"
            loading="lazy"
          />
          <ul className="how-to-use-list">
            <li>
              <strong>Grammar Correction:</strong> Identifies and suggests
              corrections for grammatical errors.
            </li>
            <li>
              <strong>Readability Analysis:</strong> Provides readability scores
              to help you gauge the clarity of your writing.
            </li>
            <li>
              <strong>Real-time Suggestions:</strong> Offers instant feedback as
              you type, enabling continuous improvement.
            </li>
            <li>
              <strong>API Integrations:</strong> Utilizes TextGears and Sapling
              APIs for advanced grammar checking and contextual suggestions.
            </li>
            <li>
              <strong>User-Friendly Interface:</strong> Designed with a clean
              and intuitive layout for easy navigation.
            </li>
          </ul>
        </div>
        {/* Question 4 */}
        <div className="faq-item">
          <h2 className="section-title">4. Is ClearWrite free to use?</h2>
          {/* Emphasis on ClearWrite's free availability */}
          <p className="section-description">
            Yes, ClearWrite is completely free for students and educators. We
            believe in providing accessible tools to aid in the learning and
            teaching process without any cost.
          </p>
        </div>
        {/* Question 5 */}
        <div className="faq-item">
          <h2 className="section-title">
            5. How does ClearWrite ensure data privacy?
          </h2>
          {/* Privacy policy overview */}
          <p className="section-description">
            At ClearWrite, we prioritize your privacy. All essays and personal
            data are securely processed through our APIs without being stored or
            shared. Your writing remains confidential and is solely used to
            provide you with feedback.
          </p>
        </div>
        {/* Contact Section */}
        <ContactSection /> {/* Reusable component for contact information */}
      </div>
    </div>
  );
};

export default FAQ; // Exporting the FAQ component for use in routing
