import React, { useState } from "react";
import evaluationData from "./evaluationData-new.json";

function EvaluationPage() {
  const {
    grammarChecked = [],
    readabilityScore = {},
    summarized = {},
    rephrase = [],
  } = evaluationData;

  const [expandedSections, setExpandedSections] = useState({});
  const [hoveredSection, setHoveredSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.leftColumn}>
        <div style={styles.square}>
          <h3
            style={{
              ...styles.squareTitle,
              ...(hoveredSection === 'grammar' && styles.squareTitleHover),
            }}
            onMouseEnter={() => setHoveredSection('grammar')}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => toggleSection('grammar')}
          >
            Grammar Check
          </h3>
          {expandedSections.grammar && (
            <div>
              {grammarChecked.length > 0 ? (
                grammarChecked.map((entry, index) => (
                  <List
                    key={index}
                    title={`Grammar Issue ${index + 1}`}
                    items={entry.corrections || ["No corrections available."]}
                  />
                ))
              ) : (
                <p style={styles.emptyText}>No grammar checks available.</p>
              )}
            </div>
          )}
        </div>

        <div style={styles.square}>
          <h3
            style={{
              ...styles.squareTitle,
              ...(hoveredSection === 'readability' && styles.squareTitleHover),
            }}
            onMouseEnter={() => setHoveredSection('readability')}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => toggleSection('readability')}
          >
            Readability Score
          </h3>
          {expandedSections.readability && (
            <div>
              {readabilityScore.fleschKincaid ? (
                <div>
                  <p style={styles.textBlock}>
                    <strong>Reading Ease:</strong> {readabilityScore.fleschKincaid.readingEase}
                  </p>
                  <p style={styles.textBlock}>
                    <strong>Grade Level:</strong> {readabilityScore.fleschKincaid.grade}
                  </p>
                  <p style={styles.textBlock}>
                    <strong>Interpretation:</strong> {readabilityScore.fleschKincaid.interpretation}
                  </p>
                </div>
              ) : (
                <p style={styles.emptyText}>No readability score available.</p>
              )}
            </div>
          )}
        </div>

        <div style={styles.square}>
          <h3
            style={{
              ...styles.squareTitle,
              ...(hoveredSection === 'summarized' && styles.squareTitleHover),
            }}
            onMouseEnter={() => setHoveredSection('summarized')}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => toggleSection('summarized')}
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
              ...(hoveredSection === 'rephrase' && styles.squareTitleHover),
            }}
            onMouseEnter={() => setHoveredSection('rephrase')}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => toggleSection('rephrase')}
          >
            Rephrased Text
          </h3>
          {expandedSections.rephrase && (
            <div>
              {rephrase.length > 0 ? (
                rephrase.map((entry, index) => (
                  <List
                    key={index}
                    title={`Rephrase Suggestion ${index + 1}`}
                    items={entry.rephrasing.map((item) => item.replacement)}
                  />
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
            ? `${(evaluationData.overallScore[0].overallScore * 100).toFixed(2)}%`
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
    gap: "10px",  // Reduced gap for more compact layout
    maxWidth: "30%",  // Ensures the left column takes up 30% of the space
  },
  rightColumn: {
    flex: 2,
    padding: "10px",
    borderLeft: "1px solid #ddd",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "70%",  // Ensures the right column takes up 70% of the space
    overflowY: "auto",
  },
  square: {
    padding: "10px",  // Reduced padding for more compact sections
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
    marginBottom: "5px",
  },
  emptyText: {
    color: "#999",
    fontStyle: "italic",
  },
};


export default EvaluationPage;