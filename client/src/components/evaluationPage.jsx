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

/**
 * The EvaluationPage component renders an evaluation page for text analysis results.
 * It displays analyzed data such as grammar corrections, readability scores, 
 * AI detection results, tone analysis, summaries, and rephrased text.
 * 
 * State data and the original text are retrieved from the React Router's `useLocation` hook.
 * Users can expand and collapse sections to view detailed results.
 */
function EvaluationPage() {
  // Get the location state containing the original text and evaluation data.
  const location = useLocation();
  const mainText = location.state?.originalText; // The main text to be evaluated.
  const realEval = location.state?.evaluationData; // Evaluation data passed from another page.

  // Destructure evaluation data, providing default empty objects for undefined data.
  const {
    correctGrammar = {},
    readability = {},
    summarize = {},
    rephrase = {},
    aidetect = {},
    tone = {},
  } = realEval;

  // Extract individual sections of evaluation data.
  const rephrased = rephrase["rephrase"]; // List of rephrased suggestions.
  const grammarChecked = correctGrammar["grammar"]; // List of grammar corrections.
  const summarized = summarize; // Summary data.
  const readabilityScore = readability; // Readability analysis data.

  // State to manage which sections of the evaluation page are expanded.
  const [expandedSections, setExpandedSections] = useState({
    summarized: false, // Default state for summary section expansion.
  });

  // State to track which summary index is currently expanded.
  const [expandedSummaryIndex, setExpandedSummaryIndex] = useState(null);

  // State for hover interactions on sections and items.
  const [hoveredSection, setHoveredSection] = useState(null); // Currently hovered section.
  const [hoveredItem, setHoveredItem] = useState(null); // Currently hovered list item.

  // State to track which rephrased suggestion is expanded.
  const [expandedRephraseIndex, setExpandedRephraseIndex] = useState(null);

  /**
   * Toggles the expanded state of a section.
   * @param {string} section - The key of the section to toggle.
   */
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // State to track which grammar issue is expanded for detailed view.
  const [expandedGrammarIssue, setExpandedGrammarIssue] = useState(null);

  // State for hover interactions on grammar issues.
  const [hoveredIssueIndex, setHoveredIssueIndex] = useState(null);

  /**
   * Toggles the expanded state of a specific grammar issue.
   * @param {number} index - The index of the grammar issue to toggle.
   */
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
            {/* Grammar Check Section */}
            <h3
              className={`square-title ${
                hoveredSection === "grammar" ? "square-title-hover" : ""
              }`}
              onMouseEnter={() => setHoveredSection("grammar")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("grammar")}
            >
              {/* Section Title */}
              Grammar Check
            </h3>

            {/* Grammar Check Content - Rendered if the section is expanded */}
            {expandedSections.grammar && (
              <div>
                {grammarChecked.filter(
                  (entry) => entry.corrections && entry.corrections.length > 0
                ).length > 0 ? (
                  // Iterate through grammar issues with corrections
                  grammarChecked
                    .filter((entry) => entry.corrections && entry.corrections.length > 0)
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
                          {/* Grammar Issue Title */}
                          <h4 className="list-title">Grammar Issue {index + 1}</h4>

                          {/* Error Description */}
                          <p className="error-text" style={{ fontSize: "14px" }}>
                            Error: {entry.corrections[0].error.en}
                          </p>

                          {/* Detailed Error with Type */}
                          <p>
                            <strong>
                              {entry.all[0].type.charAt(0).toUpperCase() +
                                entry.all[0].type.slice(1)}{" "}
                              Error: {entry.all[0].bad}
                            </strong>
                          </p>

                          {/* Display Suggestions if the Issue is Expanded */}
                          {expandedGrammarIssue === index && (
                            <div className="details">
                              <p className="suggestions-title">Suggestions:</p>
                              <ul className="suggestions-list">
                                {/* List all suggestions for the grammar issue */}
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
                  // Display message if no grammar issues are found
                  <p className="empty-text">
                    No grammar issues with corrections available.
                  </p>
                )}
              </div>
            )}
          </div>


          <div className="square">
            {/* Readability Score Section */}
            <h3
              className={`square-title ${
                hoveredSection === "readability" ? "square-title-hover" : ""
              }`}
              onMouseEnter={() => setHoveredSection("readability")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("readability")}
            >
              {/* Section Title */}
              Readability Score
            </h3>

            {/* Readability Score Content - Rendered if the section is expanded */}
            {expandedSections.readability && (
              <div>
                {/* Check if Flesch-Kincaid Score is Available */}
                {readabilityScore.fleschKincaid ? (
                  <div>
                    {/* Display Reading Ease */}
                    <p className="text-block">
                      <strong>Reading Ease:</strong>{" "}
                      {readabilityScore.fleschKincaid.readingEase}
                    </p>

                    {/* Display Grade Level */}
                    <p className="text-block">
                      <strong>Grade Level:</strong>{" "}
                      {readabilityScore.fleschKincaid.grade}
                    </p>

                    {/* Display Interpretation */}
                    <p className="text-block">
                      <strong>Interpretation:</strong>{" "}
                      {readabilityScore.fleschKincaid.interpretation}
                    </p>
                  </div>
                ) : (
                  /* Fallback Message if Score is Unavailable */
                  <p className="empty-text">
                    No readability score available. We can only calculate a readability
                    score when you have at least 40 words.
                  </p>
                )}
              </div>
            )}
          </div>


          <div className="square">
            {/* Summarized Text Section */}
            <h3
              className={`square-title ${
                hoveredSection === "summarized" ? "square-title-hover" : ""
              }`}
              onMouseEnter={() => setHoveredSection("summarized")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("summarized")}
            >
              {/* Section Title */}
              Summarized Text
            </h3>

            {/* Summarized Text Content - Rendered if the section is expanded */}
            {expandedSections.summarized && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {/* Check if Summaries Are Available */}
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
                      {/* Individual Summary Title */}
                      <h4 className="list-title">Sentence Summary {index + 1}</h4>

                      {/* Expanded Summary Content */}
                      {expandedSummaryIndex === index && (
                        <div className="details">
                          <p>{summary}</p>
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  /* Fallback Message if No Summaries are Available */
                  <p className="empty-text">No summaries available.</p>
                )}
              </div>
            )}
          </div>


          <div className="square">
            {/* Rephrased Text Section */}
            <h3
              className={`square-title ${
                hoveredSection === "rephrase" ? "square-title-hover" : ""
              }`}
              onMouseEnter={() => setHoveredSection("rephrase")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("rephrase")}
            >
              {/* Section Title */}
              Rephrased Text
            </h3>

            {/* Rephrased Text Content - Rendered if the section is expanded */}
            {expandedSections.rephrase && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {/* Check if Rephrased Entries are Available */}
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
                      {/* Individual Rephrase Suggestion Title */}
                      <h4 className="list-title">Sentence Suggestion {index + 1}</h4>

                      {/* Expanded Rephrased Content */}
                      {expandedRephraseIndex === index && (
                        <div className="details">
                          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                            <ul className="suggestions-list">
                              {/* Render List of Rephrased Suggestions */}
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
                  /* Fallback Message if No Rephrased Text is Available */
                  <p className="empty-text">No rephrased text available.</p>
                )}
              </div>
            )}
          </div>


         {/* AI Detection Section */}
          <div className="square">
            {/* Section Title */}
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

            {/* Conditional Rendering of AI Detection Data */}
            {expandedSections.aiDetect && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {/* Check if AI Detection Data (Sentence Scores) is Available */}
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
                      {/* Sentence and Score Information */}
                      <p className="score-text">
                        Sentence: {sentenceData.sentence}
                      </p>
                      <p className="score-text">
                        Score: {(sentenceData.score * 100).toFixed(2)}%
                      </p>
                    </div>
                  ))
                ) : (
                  /* Fallback Message if No AI Detection Data Available */
                  <p className="empty-text">No AI detection data available.</p>
                )}
              </div>
            )}
          </div>


          {/* Tone Analysis Section */}
          <div className="square">
            {/* Title of the section that changes style when hovered */}
            <h3
              className={`square-title ${hoveredSection === "toneAnalysis" ? "square-title-hover" : ""}`}
              // Handles mouse enter to change hoveredSection state
              onMouseEnter={() => setHoveredSection("toneAnalysis")}
              // Handles mouse leave to reset hoveredSection state
              onMouseLeave={() => setHoveredSection(null)}
              // Toggles the expanded state of the section
              onClick={() => toggleSection("toneAnalysis")}
            >
              Detailed Tone Analysis
            </h3>
            
            {/* Renders the detailed results if the section is expanded */}
            {expandedSections.toneAnalysis && (
              <div style={{ maxHeight: "200px", overflowY: "auto" }}>
                {/* Maps over the detailed results of the tone analysis */}
                {tone.detailedResults.map((resultData, index) => (
                  <div
                    key={index}
                    // Applies hover effect for individual sentence items
                    className={`list-item ${hoveredItem === index ? "list-item-hover" : ""}`}
                    // Handles mouse enter for hover effects
                    onMouseEnter={() => setHoveredItem(index)}
                    // Handles mouse leave for hover effects
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {/* Displays the first few words of the sentence as a preview */}
                    <h5 className="list-title">
                      Sentence: {tone.sentences[index].split(" ").slice(0, 3).join(" ")}...
                    </h5>

                    {/* Maps over the sentiment analysis results for the sentence */}
                    {resultData.map((sentimentData, idx) => (
                      <p key={idx} className="score-text">
                        {/* Displays the sentiment type (e.g., Positive, Negative, etc.) with its score */}
                        {sentimentData[1]}: {(sentimentData[0] * 100).toFixed(2)}%
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
        <div className="right-column">
          {/* Container for all score sections */}
          <div className="full-scores-container">

            {/* Positive Tone */}
            <div
              className={`score-container ${
                tone && tone.overallSentiment && tone.overallSentiment[0][1].toLowerCase() + "-tone"
              }`}
            >
              {/* Displays the label for the tone */}
              <span className="score-label">
                Overall{" "}
                {tone && tone.overallSentiment && tone.overallSentiment[0]
                  ? tone.overallSentiment[0][1]
                  : "No Sentiment"}{" "}
                Tone:
              </span>
              {/* Displays the sentiment score as a percentage */}
              <span className="score-value">
                {tone && tone.overallSentiment && tone.overallSentiment[0]
                  ? (tone.overallSentiment[0][0] * 100).toFixed(2) + "%"
                  : "No sentiment available."}
              </span>
            </div>

            {/* Neutral Tone */}
            <div
              className={`score-container ${
                tone && tone.overallSentiment && tone.overallSentiment[1][1].toLowerCase() + "-tone"
              }`}
            >
              {/* Displays the label for the tone */}
              <span className="score-label">
                Overall{" "}
                {tone && tone.overallSentiment && tone.overallSentiment[1]
                  ? tone.overallSentiment[1][1]
                  : "No Sentiment"}{" "}
                Tone:
              </span>
              {/* Displays the sentiment score as a percentage */}
              <span className="score-value">
                {tone && tone.overallSentiment && tone.overallSentiment[1]
                  ? (tone.overallSentiment[1][0] * 100).toFixed(2) + "%"
                  : "No sentiment available."}
              </span>
            </div>

            {/* AI Detection Score */}
            <div className="score-container">
              {/* Displays label for AI detection */}
              <h3 className="score-label">AI Detection Probability:</h3>
              {/* Conditional highlight for score over 50% */}
              <h3
                className={`score-value ${
                  aidetect && aidetect.overallScore > 0.5 ? "highlight" : ""
                }`}
              >
                {/* Displays the AI detection score as a percentage */}
                {aidetect && aidetect.overallScore
                  ? `${(aidetect.overallScore * 100).toFixed(2)}%`
                  : "No AI detection score available."}
              </h3>
            </div>
          </div>

          {/* Original text */}
          <div id="originalText">
            {/* Displays the original text content */}
            <p className="original-text">{mainText}</p>
          </div>

          {/* Note on AI detection accuracy */}
          <div className="note">Note: AI detection can be inaccurate.</div>
        </div>

      </div>
    </div>
  );
}

export default EvaluationPage;
