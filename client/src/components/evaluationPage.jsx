import React from "react";
import evaluationData from "./evaluationData-new.json";

function EvaluationPage() {
  const {
    grammarChecked = [],
    readabilityScore = {},
    summarized = {},
    rephrase = [],
  } = evaluationData;

  console.log('Readability Score:', readabilityScore); // Log to check data

  return (
    <div style={styles.pageContainer}>
      <div style={styles.sidebar}>
        <div style={styles.square}>
          <h3 style={styles.squareTitle}>Grammar Check</h3>
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

        <div style={styles.square}>
          <h3 style={styles.squareTitle}>Readability Score</h3>
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
            <p style={styles.emptyText}>No readability score available.</p>
          )}
        </div>

        <div style={styles.square}>
          <h3 style={styles.squareTitle}>Summarized Text</h3>
          {summarized.summaries?.length > 0 ? (
            <List title="Summaries" items={summarized.summaries} />
          ) : (
            <p style={styles.emptyText}>No summaries available.</p>
          )}
        </div>

        <div style={styles.square}>
          <h3 style={styles.squareTitle}>Rephrased Text</h3>
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
      </div>

      <div style={styles.mainContent}>
        <h2 style={styles.header}>Original Text</h2>
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
    padding: "20px",
    fontFamily: "'Poppins', sans-serif",
    lineHeight: "1.6",
    backgroundColor: "#f0f0f0",
  },
  sidebar: {
    width: "25%",
    paddingRight: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  mainContent: {
    width: "75%",
    paddingLeft: "20px",
    borderLeft: "1px solid #ddd",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  square: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s ease",
  },
  squareTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
    textAlign: "center",
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
