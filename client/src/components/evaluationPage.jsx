import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import "../css/Evaluationpage.css";
import { useNavigate } from "react-router-dom";

function EvaluationPage() {
  const location = useLocation();
  const realEval = location.state?.evaluationData;

  const {
    correctGrammar = {},
    readability = {},
    summarize = {},
    rephrase = {},
    aidetect = {},
    tone = {},
  } = realEval;

  const rephrased = rephrase["rephrase"];

  const grammarChecked = correctGrammar["grammar"];

  const summarized = summarize;

  const readabilityScore = readability;

  const [expandedSections, setExpandedSections] = useState({
    summarized: false,
  });

  const [expandedSummaryIndex, setExpandedSummaryIndex] = useState(null);
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedRephraseIndex, setExpandedRephraseIndex] = useState(null);

  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const [expandedGrammarIssue, setExpandedGrammarIssue] = useState(null);

  const [hoveredIssueIndex, setHoveredIssueIndex] = useState(null);

  const toggleGrammarIssue = (index) => {
    setExpandedGrammarIssue((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div id="eval-page">
      {/* Navbar */}
      <nav className="navbar">
        {/* Navbar Links and Day-Night Toggle */}
        <div className="navbar-left">
          {/* Back Button */}
          <button className="back-button" onClick={() => navigate("/home")}>
            <FaArrowLeft size={20} />
          </button>
        </div>
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
      <div style={styles.pageContainer}>
        <div style={styles.leftColumn}>
          <div style={styles.square}>
            <h3
              style={{
                ...styles.squareTitle,
                ...(hoveredSection === "grammar" && styles.squareTitleHover),
              }}
              onMouseEnter={() => setHoveredSection("grammar")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("grammar")}
            >
              Grammar Check
            </h3>
            {expandedSections.grammar && (
              <div>
                {grammarChecked.filter(
                  (entry) => entry.corrections && entry.corrections.length > 0
                ).length > 0 ? (
                  grammarChecked
                    .filter(
                      (entry) =>
                        entry.corrections && entry.corrections.length > 0
                    )
                    .map((entry, index) => (
                      <div key={index}>
                        <div
                          style={{
                            ...styles.listItem,
                            backgroundColor:
                              hoveredIssueIndex === index
                                ? "#e0e0e0"
                                : "#f9f9f9",
                          }}
                          onMouseEnter={() => setHoveredIssueIndex(index)}
                          onMouseLeave={() => setHoveredIssueIndex(null)}
                          onClick={() => toggleGrammarIssue(index)}
                        >
                          <h4 style={styles.listTitle}>
                            Grammar Issue {index + 1}
                          </h4>

                          <p style={{ ...styles.errorText, fontSize: "14px" }}>
                            Error: {entry.corrections[0].error.en}
                          </p>
                          <p>
                            <strong>
                              {entry.all[0].type.charAt(0).toUpperCase() +
                                entry.all[0].type.slice(1)}{" "}
                              Error: {entry.all[0].bad}
                            </strong>
                          </p>

                          {expandedGrammarIssue === index && (
                            <div style={styles.details}>
                              <p style={styles.suggestionsTitle}>
                                Suggestions:
                              </p>
                              <ul style={styles.suggestionsList}>
                                {entry.corrections[0].suggestions.map(
                                  (suggestion, idx) => (
                                    <li key={idx} style={styles.suggestionItem}>
                                      {suggestion}
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    ))
                ) : (
                  <p style={styles.emptyText}>
                    No grammar issues with corrections available.
                  </p>
                )}
              </div>
            )}
          </div>

          <div style={styles.square}>
            <h3
              style={{
                ...styles.squareTitle,
                ...(hoveredSection === "readability" &&
                  styles.squareTitleHover),
              }}
              onMouseEnter={() => setHoveredSection("readability")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("readability")}
            >
              Readability Score
            </h3>
            {expandedSections.readability && (
              <div>
                {readabilityScore.fleschKincaid ? (
                  <div>
                    <p style={styles.textBlock}>
                      <strong>Reading Ease:</strong>{" "}
                      {readabilityScore.fleschKincaid.readingEase}
                    </p>
                    <p style={styles.textBlock}>
                      <strong>Grade Level:</strong>{" "}
                      {readabilityScore.fleschKincaid.grade}
                    </p>
                    <p style={styles.textBlock}>
                      <strong>Interpretation:</strong>{" "}
                      {readabilityScore.fleschKincaid.interpretation}
                    </p>
                  </div>
                ) : (
                  <p style={styles.emptyText}>
                    No readability score available. We can only calculate a
                    readability score when you have at least 40 words.
                  </p>
                )}
              </div>
            )}
          </div>

          <div style={styles.square}>
            <h3
              style={{
                ...styles.squareTitle,
                ...(hoveredSection === "summarized" && styles.squareTitleHover),
              }}
              onMouseEnter={() => setHoveredSection("summarized")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("summarized")}
            >
              Summarized Text
            </h3>
            {expandedSections.summarized && (
              <div>
                {summarized.summaries?.length > 0 ? (
                  summarized.summaries.map((summary, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.listItem,
                        ...(hoveredItem === index && styles.listItemHover),
                      }}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={
                        () =>
                          setExpandedSummaryIndex(
                            expandedSummaryIndex === index ? null : index
                          ) // Toggle individual summary
                      }
                    >
                      <h4 style={styles.listTitle}>
                        Sentence Summary {index + 1}
                      </h4>

                      {/* Show the expanded summary content */}
                      {expandedSummaryIndex === index && (
                        <div style={styles.details}>
                          <p>{summary}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p style={styles.emptyText}>No summaries available.</p>
                )}
              </div>
            )}
          </div>

          <div style={styles.square}>
            <h3
              style={{
                ...styles.squareTitle,
                ...(hoveredSection === "rephrase" && styles.squareTitleHover), // Apply hover styles
              }}
              onMouseEnter={() => setHoveredSection("rephrase")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("rephrase")} // Toggle the rephrase section
            >
              Rephrased Text
            </h3>

            {/* Expandable section */}
            {expandedSections.rephrase && (
              <div>
                {rephrased.length > 0 ? (
                  rephrased.map((entry, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.listItem,
                        ...(hoveredItem === index && styles.listItemHover), // Highlight hovered item
                      }}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() =>
                        setExpandedRephraseIndex((prevIndex) =>
                          prevIndex === index ? null : index
                        )
                      } // Expand/collapse individual suggestion
                    >
                      <h4 style={styles.listTitle}>
                        Sentence Suggestion {index + 1}
                      </h4>

                      {/* Show rephrased suggestions when expanded */}
                      {expandedRephraseIndex === index && (
                        <div style={styles.details}>
                          <div
                            style={{ maxHeight: "200px", overflowY: "auto" }}
                          >
                            <ul style={styles.suggestionsList}>
                              {entry.rephrasing.map((item, idx) => (
                                <li key={idx} style={styles.suggestionItem}>
                                  {item.replacement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p style={styles.emptyText}>No rephrased text available.</p>
                )}
              </div>
            )}
          </div>
          {/* AI Detection Section */}
          <div style={styles.square}>
            <h3
              style={{
                ...styles.squareTitle,
                ...(expandedSections.aiDetect && styles.squareTitleActive),
              }}
              onClick={() => toggleSection("aiDetect")}
            >
              AI Detection Breakdown
            </h3>

            {/* Scrollable content for AI Detection */}
            {expandedSections.aiDetect && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {aidetect.sentenceScores?.length > 0 ? (
                  aidetect.sentenceScores.map((sentenceData, index) => (
                    <div key={index} style={styles.listItem}>
                      <p style={styles.scoreText}>
                        Sentence: {sentenceData.sentence}
                      </p>
                      <p style={styles.scoreText}>
                        Score: {(sentenceData.score * 100).toFixed(2)}%
                      </p>
                    </div>
                  ))
                ) : (
                  <p style={styles.emptyText}>
                    No AI detection data available.
                  </p>
                )}
              </div>
            )}
          </div>
          {/* Tone Analysis Section */}
          <div style={styles.square}>
            <h3
              style={{
                ...styles.squareTitle,
                ...(expandedSections.toneAnalysis && styles.squareTitleActive),
              }}
              onClick={() => toggleSection("toneAnalysis")}
            >
              Detailed Tone Analysis
            </h3>

            {/* Scrollable content for Tone Analysis */}
            {expandedSections.toneAnalysis && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {/* Detailed Sentiment by Sentence */}
                <h4 style={styles.listTitle}>Detailed Sentiment Analysis</h4>
                {tone.detailedResults.map((resultData, index) => (
                  <div key={index} style={styles.listItem}>
                    <h5 style={styles.listTitle}>
                      Sentence:{" "}
                      {tone.sentences[index].split(" ").slice(0, 3).join(" ")}
                      ...
                    </h5>
                    {resultData.map((sentimentData, idx) => (
                      <p key={idx} style={styles.scoreText}>
                        {sentimentData[1]}:{" "}
                        {(sentimentData[0] * 100).toFixed(2)}%
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={styles.rightColumn}>
          <div style={styles.fullScoresContainer}>
            {/* Tone Sentiment Breakdown */}
            <div style={styles.sentimentContainer}>
              <div style={styles.scoreContainer}>
                <span style={styles.scoreLabel}>
                  {tone && tone.overallSentiment && tone.overallSentiment[0]
                    ? tone.overallSentiment[0][1]
                    : "No Sentiment"}{" "}
                  Tone:
                </span>
                <span style={styles.scoreValue}>
                  {tone && tone.overallSentiment && tone.overallSentiment[0]
                    ? (tone.overallSentiment[0][0] * 100).toFixed(2) + "%"
                    : "No sentiment available."}
                </span>
              </div>

              <div style={styles.scoreContainer}>
                <span style={styles.scoreLabel}>
                  {tone && tone.overallSentiment && tone.overallSentiment[1]
                    ? tone.overallSentiment[1][1]
                    : "No Sentiment"}{" "}
                  Tone:
                </span>
                <span style={styles.scoreValue}>
                  {tone && tone.overallSentiment && tone.overallSentiment[1]
                    ? (tone.overallSentiment[1][0] * 100).toFixed(2) + "%"
                    : "No sentiment available."}
                </span>
              </div>
            </div>

            {/* AI Detection Score */}
            <div style={styles.scoreContainer}>
              <h3 style={styles.scoreLabel}>AI Detection Score:</h3>
              <h3 style={styles.scoreValue}>
                {aidetect && aidetect.overallScore
                  ? `${(aidetect.overallScore * 100).toFixed(2)}%`
                  : "No AI detection score available."}
              </h3>
            </div>
          </div>

          {/* Original text */}
          <div id="originalText">
            <p style={styles.originalText}>{readabilityScore.originalText}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.6",
    gap: "20px",
    backgroundColor: "#f0f0f0",
    overflowy: "auto",
    borderRadius: "10px" /* Optional: Adds rounded corners */,
  },
  leftColumn: {
    flex: 1,
    paddingRight: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px", // Reduced gap for more compact layout
    maxWidth: "30%", // Ensures the left column takes up 30% of the space
  },
  rightColumn: {
    flex: 2,
    padding: "10px",
    borderLeft: "1px solid #ddd",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "70%", // Ensures the right column takes up 70% of the space
    overflowY: "auto", // Allows for scrolling if content overflows
    position: "sticky", // Makes it sticky
    top: "0", // Sticks to the top of the viewport when scrolling
    zIndex: 10, // Ensure it stays above other elements while scrolling
  },
  square: {
    padding: "10px", // Reduced padding for more compact sections
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
    cursor: "pointer",
  },
  squareTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
    textAlign: "center",
    backgroundColor: "#e0e0e0",
    padding: "10px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
  squareTitleHover: {
    backgroundColor: "#333",
    color: "#fff",
  },
  header: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  originalText: {
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    color: "#333",
    fontSize: "16px",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  textBlock: {
    fontSize: "16px",
    marginBottom: "10px",
  },
  listTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#444",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  listItem: {
    fontSize: "14px",
    marginBottom: "10px",
    cursor: "pointer",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    transition: "background-color 0.3s ease", // Smooth transition for color change
  },
  details: {
    paddingLeft: "20px",
    fontSize: "14px",
    backgroundColor: "#f0f0f0",
    marginTop: "10px",
    borderRadius: "5px",
  },
  errorText: {
    fontWeight: "bold",
    fontSize: "16px",
    color: "#d9534f", // Red color for error message
    marginBottom: "10px",
  },
  suggestionsTitle: {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  suggestionsList: {
    listStyleType: "disc", // Bulleted list style
    paddingLeft: "20px",
  },
  suggestionItem: {
    fontSize: "14px",
    marginBottom: "5px",
  },
  emptyText: {
    fontStyle: "italic",
    color: "#888",
  },
  noIssuesText: {
    fontStyle: "italic",
    color: "#888",
    fontSize: "14px",
  },
  listItemHover: {
    backgroundColor: "#e0e0e0",
    cursor: "pointer",
  },

  fullScoresContainer: {
    display: "flex", // Use flexbox for the main container
    justifyContent: "space-between", // Space out the AI Detection and Sentiment sections
    alignItems: "center", // Center vertically
    width: "100%", // Full width
    gap: "40px", // Add spacing between elements
    marginTop: "20px", // Optional, add top margin for spacing
  },
  sentimentContainer: {
    display: "flex", // Use flexbox for tone sentiment items
    justifyContent: "space-between", // Space the sentiment items across the row
    width: "60%", // Adjust width to control how much space it takes up
  },
  scoreContainer: {
    display: "flex",
    flexDirection: "column", // Stack label and value vertically
    alignItems: "center", // Center label and value horizontally
    gap: "5px", // Small gap between label and value
  },
  scoreLabel: {
    fontSize: "18px",
    color: "#333",
    textAlign: "center", // Center label text
  },
  scoreValue: {
    fontSize: "18px",
    color: "#333",
    textAlign: "center", // Center value text
  },
};

export default EvaluationPage;
