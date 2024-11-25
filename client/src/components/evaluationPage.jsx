import React, { useState } from "react";
import evaluationData from "./evaluationData-new.json";
import { useLocation } from "react-router-dom";

function EvaluationPage() {
  // const {
  //   grammarChecked = [],
  //   readabilityScore = {},
  //   summarized = {},
  //   rephrase = [],
  // } = evaluationData;

  // const location = useLocation();
  // const realEval = location.state?.evaluationData;

  const realEval = {
    correctGrammar: {
      grammar: [
        {
          originalText:
            "Writing well is a skill that opens doors to countless opportunities.",
          corrections: [],
        },
        {
          originalText:
            " Grammar is important because it makes the sentences clarity and better for readings.",
          corrections: [],
        },
        {
          originalText:
            " It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
          corrections: [],
        },
        {
          originalText:
            " As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
          corrections: [
            {
              error: {
                en: "Possible spelling mistake",
              },
              suggestions: [
                "emphasising",
                "reemphasising",
                "emphasis",
                "emphasise",
                "emphasis's",
                "emphasised",
              ],
            },
          ],
          all: [
            {
              id: "e1930194451",
              offset: 83,
              length: 11,
              description: {
                en: "Possible spelling mistake",
              },
              bad: "emphasizing",
              better: [
                "emphasising",
                "reemphasising",
                "emphasis",
                "emphasise",
                "emphasis's",
                "emphasised",
              ],
              type: "spelling",
            },
          ],
        },
      ],
    },
    readability: {
      originalText:
        "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
      fleschKincaid: {
        readingEase: 51.7,
        grade: "10th to 12th grade",
        interpretation: "Fairly difficult to read",
      },
      emotion: {
        positive: 0.5,
        negative: 0.5,
      },
      counters: {
        length: 402,
        clearLength: 339,
        words: 65,
        sentences: 4,
      },
      all: {
        fleschKincaid: {
          readingEase: 51.7,
          grade: "10th to 12th grade",
          interpretation: "Fairly difficult to read",
        },
        gunningFog: 12.7,
        colemanLiau: 12,
        SMOG: 12,
        vocabularySize: {
          active: null,
          passive: null,
        },
        emotion: {
          positive: 0.5,
          negative: 0.5,
        },
        counters: {
          length: 402,
          clearLength: 339,
          words: 65,
          sentences: 4,
        },
      },
    },
    summarize: {
      originalText:
        "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
      summaries: [
        "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
        "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
      ],
      all: {
        keywords: [
          "writing",
          "skill",
          "improve",
          "gain",
          "good",
          "mirror",
          "confidence",
          "communication",
          "clear",
          "opens",
        ],
        highlight: [],
        summary: [
          "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
          "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
        ],
      },
    },
    rephrase: {
      rephrase: [
        {
          originalText:
            "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
          rephrasing: [
            {
              hash: "9caa16ed-b315-5120-9b36-544c3a65a83a",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The ability to write effectively unlocks a multitude of prospects.",
            },
            {
              hash: "5238730d-c59d-5f06-b3a1-785495aa11a6",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "A proficient writing skill grants access to an abundance of possibilities.",
            },
            {
              hash: "64125733-cc9c-5342-a4e3-f517c08f5775",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Mastering the craft of writing provides the key to numerous opportunities.",
            },
            {
              hash: "3cad6eeb-492e-5822-a4bb-bedff03bace2",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The art of writing well holds the power to unlock a vast array of chances.",
            },
            {
              hash: "240fcf35-6146-598a-a8b1-51f31bf7fbbc",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Adept writing abilities grant entrance to a plethora of opportunities.",
            },
          ],
        },
        {
          originalText:
            "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
          rephrasing: [
            {
              hash: "e9e807db-424e-5cda-ab19-860a9c611e4d",
              model_version: "v20240207",
              original:
                "Grammar is important because it makes the sentences clarity and better for readings.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The significance of grammar lies in its ability to enhance sentence clarity and improve the overall reading experience.",
            },
            {
              hash: "ca903435-a2b6-5de0-83ab-27921c80303a",
              model_version: "v20240207",
              original:
                "Grammar is important because it makes the sentences clarity and better for readings.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Grammar plays a crucial role in ensuring that sentences are clear and well-structured, thereby enhancing the reading experience.",
            },
            {
              hash: "16bb5c4f-55c8-5e2e-8ec6-181455e92c30",
              model_version: "v20240207",
              original:
                "Grammar is important because it makes the sentences clarity and better for readings.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The importance of grammar cannot be overstated when it comes to making sentences clearer and more effective for reading.",
            },
            {
              hash: "0280866c-757a-5806-90b0-a0ac5efb464c",
              model_version: "v20240207",
              original:
                "Grammar is important because it makes the sentences clarity and better for readings.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Proper use of grammar is essential for achieving clarity in sentences and enhancing the quality of the reading material.",
            },
            {
              hash: "1e4676c2-0014-5b92-8766-9c00749e1d43",
              model_version: "v20240207",
              original:
                "Grammar is important because it makes the sentences clarity and better for readings.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Grammar is a vital component in the construction of clear and effective sentences, thereby contributing significantly to the reading experience.",
            },
          ],
        },
        {
          originalText:
            "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
          rephrasing: [
            {
              hash: "f7e737a0-2edc-5904-8762-f677383f37c0",
              model_version: "v20240207",
              original:
                "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
              rephrase_type: "informal_to_formal",
              replacement:
                "I derive great pleasure from assisting others in enhancing their writing abilities and witnessing their growth in self-assurance regarding their expressive talents.",
            },
            {
              hash: "61621122-2e18-513f-9fad-8a9a157cc01b",
              model_version: "v20240207",
              original:
                "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
              rephrase_type: "informal_to_formal",
              replacement:
                "Assisting others in improving their writing and observing their newfound confidence in their communication skills is an unending source of joy for me.",
            },
            {
              hash: "e36d6531-f338-57b3-b4b9-6190632529db",
              model_version: "v20240207",
              original:
                "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
              rephrase_type: "informal_to_formal",
              replacement:
                "The satisfaction I experience in aiding others to refine their writing and observe their enhanced self-assurance in their communication skills is immeasurable.",
            },
            {
              hash: "3456f5c2-2657-5369-a552-8701e72e332e",
              model_version: "v20240207",
              original:
                "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
              rephrase_type: "informal_to_formal",
              replacement:
                "I find immense joy in helping others develop their writing skills and observing their newfound confidence in their communication abilities.",
            },
            {
              hash: "8544aea5-d0f1-5d83-af44-21de02be3b8b",
              model_version: "v20240207",
              original:
                "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
              rephrase_type: "informal_to_formal",
              replacement:
                "It brings me great joy to support others in their writing improvement journey and observe their increased self-assurance in their communication skills.",
            },
          ],
        },
        {
          originalText:
            "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
          rephrasing: [
            {
              hash: "3ba8661f-4dd4-5256-a371-81ad91b9e6b9",
              model_version: "v20240207",
              original:
                "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
              rephrase_type: "informal_to_formal",
              replacement:
                "A shrewd observation by an intelligent person asserts that 'Effective writing is a reflection of a clear-thinking mind,' underscoring the significance of lucid expression.",
            },
            {
              hash: "948b67ca-5974-5194-99b2-a778b03bd90d",
              model_version: "v20240207",
              original:
                "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
              rephrase_type: "informal_to_formal",
              replacement:
                "A sage remark by an insightful person states that 'Clear writing is a manifestation of a well-organized mind,' highlighting the value of precise communication.",
            },
            {
              hash: "ec905484-4bd6-5af2-8dd7-93e4399a22fa",
              model_version: "v20240207",
              original:
                "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
              rephrase_type: "informal_to_formal",
              replacement:
                "An astute observation from a knowledgeable person asserts that 'Good writing is a manifestation of a well-structured mind,' stressing the importance of articulate expression.",
            },
            {
              hash: "8fd3700e-cf14-5822-a195-290dde46200f",
              model_version: "v20240207",
              original:
                "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
              rephrase_type: "informal_to_formal",
              replacement:
                "A profound statement by a discerning person asserts that 'Effective writing is a reflection of a well-regulated mind,' emphasizing the significance of clear and concise communication.",
            },
            {
              hash: "ac5bc5e6-1d64-5f15-b627-ba6259772d0d",
              model_version: "v20240207",
              original:
                "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
              rephrase_type: "informal_to_formal",
              replacement:
                "A perceptive observation by a thoughtful person asserts that 'Clear writing is a reflection of a well-governed mind,' highlighting the importance of logical and organized expression.",
            },
          ],
        },
      ],
    },
    aidetect: {
      overallScore: 0.9840300298077785,
      sentenceScores: [
        {
          score: 0.21343320587607306,
          sentence:
            "Writing well is a skill that opens doors to countless opportunities.",
        },
        {
          score: 9.419816038302997e-10,
          sentence:
            "Grammar is important because it makes the sentences clarity and better for readings.",
        },
        {
          score: 0.43752189183034196,
          sentence:
            "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
        },
        {
          score: 0.3412947188620773,
          sentence:
            "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
        },
      ],
    },
    tone: {
      sentences: [
        "Writing well is a skill that opens doors to countless opportunities.",
        "Grammar is important because it makes the sentences clarity and better for readings.",
        "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
        "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
      ],
      overallSentiment: [[1, "POSITIVE"]],
      detailedResults: [
        [[0.98443155689165, "POSITIVE"]],
        [
          [0.9972456566756591, "POSITIVE"],
          [0.001190662500448525, "NEUTRAL"],
        ],
        [[0.9829248506575823, "POSITIVE"]],
        [[0.9685407653450966, "POSITIVE"]],
      ],
    },
  };
  // console.log("realEval");
  // console.log(realEval);

  const {
    correctGrammar = {},
    readability = {},
    summarize = {},
    rephrase = {},
    aidetect = {},
    tone = {},
  } = realEval;

  console.log(correctGrammar, readability, summarize, rephrase, aidetect, tone);

  console.log("grammarChecked");
  console.log(correctGrammar["grammar"]);

  const rephrased = rephrase["rephrase"];

  const grammarChecked = correctGrammar["grammar"];

  const summarized = summarize;

  const readabilityScore = readability;

  console.log(
    grammarChecked,
    readabilityScore,
    summarize,
    rephrased,
    aidetect,
    tone
  );

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
          {grammarChecked.length > 0 ? (
          grammarChecked.map((entry, index) => (
            <div key={index}>
              <div
                style={{
                  ...styles.listItem,
                  backgroundColor:
                    hoveredIssueIndex === index ? "#e0e0e0" : "#f9f9f9", // Background change on hover
                }}
                onMouseEnter={() => setHoveredIssueIndex(index)} // Set the hovered issue
                onMouseLeave={() => setHoveredIssueIndex(null)} // Reset when mouse leaves
                onClick={() => toggleGrammarIssue(index)}
              >
                <h4 style={styles.listTitle}>Grammar Issue {index + 1}</h4>

                {/* Display error text with adjusted font size */}
                {entry.corrections && entry.corrections.length > 0 && (
                  <p style={{ ...styles.errorText, fontSize: "14px" }}>
                    Error: {entry.corrections[0].error.en}
                  </p>
                )}

                {expandedGrammarIssue === index && entry.corrections && entry.corrections.length > 0 ? (
                  <div style={styles.details}>
                    <p style={styles.suggestionsTitle}>Suggestions:</p>
                    <ul style={styles.suggestionsList}>
                      {entry.corrections[0].suggestions.map((suggestion, idx) => (
                        <li key={idx} style={styles.suggestionItem}>
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  // Displaying "No corrections available" message only for entries with no corrections
                  entry.corrections && entry.corrections.length === 0 && (
                    <p style={styles.noIssuesText}>No corrections available.</p>
                  )
                )}
              </div>
            </div>
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
                <p style={styles.emptyText}>No readability score available.</p>
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
