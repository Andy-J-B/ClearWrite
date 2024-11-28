import React, { useState } from "react";
import evaluationData from "./evaluationData-new.json";
import { useLocation } from "react-router-dom";

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

  const [expandedSections, setExpandedSections] = useState({});
  const [hoveredSection, setHoveredSection] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [expandedRephraseIndex, setExpandedRephraseIndex] = useState(null);

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
                    (entry) => entry.corrections && entry.corrections.length > 0
                  )
                  .map((entry, index) => (
                    <div key={index}>
                      <div
                        style={{
                          ...styles.listItem,
                          backgroundColor:
                            hoveredIssueIndex === index ? "#e0e0e0" : "#f9f9f9",
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
                            <p style={styles.suggestionsTitle}>Suggestions:</p>
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
              ...(hoveredSection === "readability" && styles.squareTitleHover),
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
                <List title="Summaries" items={summarized.summaries} />
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
                      Rephrase Suggestion {index + 1}
                    </h4>

                    {/* Show rephrased suggestions when expanded */}
                    {expandedRephraseIndex === index && (
                      <div style={styles.details}>
                        <ul style={styles.suggestionsList}>
                          {entry.rephrasing.map((item, idx) => (
                            <li key={idx} style={styles.suggestionItem}>
                              {item.replacement}
                            </li>
                          ))}
                        </ul>
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
      </div>

      <div style={styles.rightColumn}>
        <h2 style={styles.header}>Overall Score</h2>
        <h3 style={styles.header}>
          {evaluationData.overallScore && evaluationData.overallScore.length > 0
            ? `${(evaluationData.overallScore[0].overallScore * 100).toFixed(
                2
              )}%`
            : "No overall score available."}
        </h3>
        <p style={styles.originalText}>{readabilityScore.originalText}</p>
      </div>
    </div>
  );
}

// Utility Component for Lists
const List = ({ title, items }) => (
  <div>
    {title && <h4 style={styles.listTitle}>{title}</h4>}
    <ul style={styles.list}>
      {items.map((item, index) => (
        <li key={index} style={styles.listItem}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.6",
    gap: "20px",
    backgroundColor: "#f0f0f0",
    overflowX: "hidden",
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
    overflowY: "auto",
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
};

export default EvaluationPage;
