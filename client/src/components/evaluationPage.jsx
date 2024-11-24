import React from "react";
import evaluationData from "./evaluationData-new.json";

function EvaluationPage() {
  const { grammarChecked, readabilityScore, summarized } = evaluationData; // Destructure the data

  return (
    <div style={styles.container}>
      {/* Evaluation Section */}
      <div style={styles.evaluationContainer}>
        <h2 style={styles.header}>Overall</h2>
        <p style={styles.grade}>{evaluationData.overallGrade}</p>

        {/* Grammar Evaluation Section */}
        <h2 style={styles.header}>Grammar Evaluation</h2>
        {grammarChecked.corrections.map((correction, index) => (
          <div key={index} style={styles.correctionContainer}>
            <p style={styles.errorText}>Error: {correction.error.en}</p>
            <p>Suggested corrections:</p>
            <ul style={styles.suggestionList}>
              {correction.suggestions.map((suggestion, i) => (
                <li key={i} style={styles.suggestionItem}>
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <p style={styles.grade}>{grammarChecked.grade}</p>

        {/* Readability Evaluation Section */}
        <h2 style={styles.header}>Readability Evaluation</h2>
        <p>
          Flesch-Kincaid Reading Ease:{" "}
          {readabilityScore.fleschKincaid.readingEase}
        </p>
        <p>Grade Level: {readabilityScore.fleschKincaid.grade}</p>
        <p>Interpretation: {readabilityScore.fleschKincaid.interpretation}</p>
        <p style={styles.grade}>{readabilityScore.grade}</p>

        {/* Summarized Text Section */}
        <h2 style={styles.header}>Summarized Text</h2>
        {summarized.summary.map((sentence, index) => (
          <p key={index} style={styles.textBlock}>
            {sentence}
          </p>
        ))}
      </div>

      {/* Original Text Section */}
      <div style={styles.textContainer}>
        <h2 style={styles.header}>Original Text</h2>
        <p style={styles.textBlock}>{summarized.originalText}</p>
        <pre style={styles.jsonPreview}>
          {JSON.stringify(evaluationData, null, 2)}
        </pre>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    padding: "20px",
  },
  evaluationContainer: {
    width: "40%",
    paddingRight: "20px",
  },
  header: {
    fontWeight: "bold",
    fontSize: "18px",
    marginTop: "10px",
    marginBottom: "5px",
  },
  grade: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  errorText: {
    color: "#ff6347",
    fontSize: "14px",
  },
  correctionContainer: {
    marginBottom: "15px",
  },
  suggestionList: {
    listStyleType: "disc",
    marginLeft: "20px",
  },
  suggestionItem: {
    fontSize: "14px",
  },
  textContainer: {
    width: "60%",
    backgroundColor: "#e0e0e0",
    padding: "20px",
    borderRadius: "8px",
  },
  textBlock: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
  jsonPreview: {
    backgroundColor: "#f4f4f4",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "14px",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
};

export default EvaluationPage;
