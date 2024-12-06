/**
 * EvaluationPage Component
 *
 * Description:
 * This component provides a detailed evaluation of text analysis results, including grammar corrections,
 * readability scores, summarized text, rephrased suggestions, and overall evaluation data.
 *
 * Features:
 * - Displays different aspects of text evaluation (grammar, readability, summarization, rephrasing).
 * - Includes expandable sections for detailed insights (e.g., grammar issues, rephrased suggestions).
 * - Implements hover effects and animations for better user interaction.
 * - Allows users to toggle between sections to focus on specific evaluations.
 *
 * Props and States:
 * - `location.state.evaluationData`: Contains all the evaluation data passed from the previous page.
 * - `expandedSections`: State to track which evaluation sections are expanded.
 * - `hoveredSection`: State to track the currently hovered section.
 * - `expandedRephraseIndex`: State to track expanded rephrased suggestions.
 * - `expandedGrammarIssue`: State to track expanded grammar issues.
 * - Includes additional hover states for list items (grammar and rephrase).
 *
 * Dependencies:
 * - React Router's `useLocation` hook to fetch evaluation data from navigation state.
 * - External JSON data (`evaluationData-new.json`) for mock data (if available).
 *
 * Styling:
 * - Inline styles are used to create a responsive and interactive layout.
 * - Hover and transition effects enhance user experience.
 *
 * Usage:
 * - This component should be rendered after text evaluation on the "Evaluate" route.
 * - Ensure `evaluationData` is passed correctly through navigation state.
 */

import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import "../css/Evaluationpage.css";

function EvaluationPage() {
  const location = useLocation();
  const mainText = location.state?.originalText;
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
      <Navbar />
      <div className="page-container">
        <div className="left-column">
          <div className="square">
            <h3
              className={`square-title ${
                hoveredSection === "grammar" ? "square-title-hover" : ""
              }`}
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
                          className={`list-item ${
                            hoveredIssueIndex === index ? "list-item-hover" : ""
                          }`}
                          onMouseEnter={() => setHoveredIssueIndex(index)}
                          onMouseLeave={() => setHoveredIssueIndex(null)}
                          onClick={() => toggleGrammarIssue(index)}
                        >
                          <h4 className="list-title">
                            Grammar Issue {index + 1}
                          </h4>

                          <p
                            className="error-text"
                            style={{ fontSize: "14px" }}
                          >
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
                            <div className="details">
                              <p className="suggestions-title">Suggestions:</p>
                              <ul className="suggestions-list">
                                {entry.corrections[0].suggestions.map(
                                  (suggestion, idx) => (
                                    <li key={idx} className="suggestion-item">
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
                  <p className="empty-text">
                    No grammar issues with corrections available.
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="square">
            <h3
              className={`square-title ${
                hoveredSection === "readability" ? "square-title-hover" : ""
              }`}
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
                    <p className="text-block">
                      <strong>Reading Ease:</strong>{" "}
                      {readabilityScore.fleschKincaid.readingEase}
                    </p>
                    <p className="text-block">
                      <strong>Grade Level:</strong>{" "}
                      {readabilityScore.fleschKincaid.grade}
                    </p>
                    <p className="text-block">
                      <strong>Interpretation:</strong>{" "}
                      {readabilityScore.fleschKincaid.interpretation}
                    </p>
                  </div>
                ) : (
                  <p className="empty-text">
                    No readability score available. We can only calculate a
                    readability score when you have at least 40 words.
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="square">
            <h3
              className={`square-title ${
                hoveredSection === "summarized" ? "square-title-hover" : ""
              }`}
              onMouseEnter={() => setHoveredSection("summarized")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("summarized")}
            >
              Summarized Text
            </h3>
            {expandedSections.summarized && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {summarized.summaries?.length > 0 ? (
                  summarized.summaries.map((summary, index) => (
                    <div
                      key={index}
                      className={`list-item ${
                        hoveredItem === index ? "list-item-hover" : ""
                      }`}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() =>
                        setExpandedSummaryIndex(
                          expandedSummaryIndex === index ? null : index
                        )
                      }
                    >
                      <h4 className="list-title">
                        Sentence Summary {index + 1}
                      </h4>

                      {expandedSummaryIndex === index && (
                        <div className="details">
                          <p>{summary}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p className="empty-text">No summaries available.</p>
                )}
              </div>
            )}
          </div>

          <div className="square">
            <h3
              className={`square-title ${
                hoveredSection === "rephrase" ? "square-title-hover" : ""
              }`}
              onMouseEnter={() => setHoveredSection("rephrase")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("rephrase")}
            >
              Rephrased Text
            </h3>
            {expandedSections.rephrase && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {rephrased.length > 0 ? (
                  rephrased.map((entry, index) => (
                    <div
                      key={index}
                      className={`list-item ${
                        hoveredItem === index ? "list-item-hover" : ""
                      }`}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() =>
                        setExpandedRephraseIndex((prevIndex) =>
                          prevIndex === index ? null : index
                        )
                      }
                    >
                      <h4 className="list-title">
                        Sentence Suggestion {index + 1}
                      </h4>

                      {expandedRephraseIndex === index && (
                        <div className="details">
                          <div
                            style={{ maxHeight: "200px", overflowY: "auto" }}
                          >
                            <ul className="suggestions-list">
                              {entry.rephrasing.map((item, idx) => (
                                <li key={idx} className="suggestion-item">
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
                  <p className="empty-text">No rephrased text available.</p>
                )}
              </div>
            )}
          </div>

          {/* AI Detection Section */}
          <div className="square">
            <h3
              className={`square-title ${
                hoveredSection === "aiDetect" ? "square-title-hover" : ""
              }`}
              onMouseEnter={() => setHoveredSection("aiDetect")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("aiDetect")}
            >
              AI Detection Breakdown
            </h3>
            {expandedSections.aiDetect && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {aidetect.sentenceScores?.length > 0 ? (
                  aidetect.sentenceScores.map((sentenceData, index) => (
                    <div
                      key={index}
                      className={`list-item ${
                        hoveredItem === index ? "list-item-hover" : ""
                      }`}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <p className="score-text">
                        Sentence: {sentenceData.sentence}
                      </p>
                      <p className="score-text">
                        Score: {(sentenceData.score * 100).toFixed(2)}%
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="empty-text">No AI detection data available.</p>
                )}
              </div>
            )}
          </div>

          {/* Tone Analysis Section */}
          <div className="square">
            <h3
              className={`square-title ${
                hoveredSection === "toneAnalysis" ? "square-title-hover" : ""
              }`}
              onMouseEnter={() => setHoveredSection("toneAnalysis")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("toneAnalysis")}
            >
              Detailed Tone Analysis
            </h3>
            {expandedSections.toneAnalysis && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {tone.detailedResults.map((resultData, index) => (
                  <div
                    key={index}
                    className={`list-item ${
                      hoveredItem === index ? "list-item-hover" : ""
                    }`}
                    onMouseEnter={() => setHoveredItem(index)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <h5 className="list-title">
                      Sentence:{" "}
                      {tone.sentences[index].split(" ").slice(0, 3).join(" ")}
                      ...
                    </h5>
                    {resultData.map((sentimentData, idx) => (
                      <p key={idx} className="score-text">
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
        <div className="right-column">
          <div className="full-scores-container">
            {/* Positive Tone */}
            <div
              className={`score-container ${
                tone &&
                tone.overallSentiment &&
                tone.overallSentiment[0][1].toLowerCase() + "-tone"
              }`}
            >
              <span className="score-label">
                Overall{" "}
                {tone && tone.overallSentiment && tone.overallSentiment[0]
                  ? tone.overallSentiment[0][1]
                  : "No Sentiment"}{" "}
                Tone:
              </span>
              <span className="score-value">
                {tone && tone.overallSentiment && tone.overallSentiment[0]
                  ? (tone.overallSentiment[0][0] * 100).toFixed(2) + "%"
                  : "No sentiment available."}
              </span>
            </div>

            {/* Neutral Tone */}
            <div
              className={`score-container ${
                tone &&
                tone.overallSentiment &&
                tone.overallSentiment[1][1].toLowerCase() + "-tone"
              }`}
            >
              <span className="score-label">
                Overall{" "}
                {tone && tone.overallSentiment && tone.overallSentiment[1]
                  ? tone.overallSentiment[1][1]
                  : "No Sentiment"}{" "}
                Tone:
              </span>
              <span className="score-value">
                {tone && tone.overallSentiment && tone.overallSentiment[1]
                  ? (tone.overallSentiment[1][0] * 100).toFixed(2) + "%"
                  : "No sentiment available."}
              </span>
            </div>

            {/* AI Detection Score */}
            <div className="score-container">
              <h3 className="score-label">AI Detection Probability:</h3>
              <h3
                className={`score-value ${
                  aidetect && aidetect.overallScore > 0.5 ? "highlight" : ""
                }`}
              >
                {aidetect && aidetect.overallScore
                  ? `${(aidetect.overallScore * 100).toFixed(2)}%`
                  : "No AI detection score available."}
              </h3>
            </div>
          </div>

          {/* Original text */}
          <div id="originalText">
            <p className="original-text">{mainText}</p>
          </div>

          <div className="note">Note: AI detection can be inaccurate.</div>
        </div>
      </div>
    </div>
  );
}

export default EvaluationPage;
