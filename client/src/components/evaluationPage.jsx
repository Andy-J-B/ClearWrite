import React, { useState } from "react";
import evaluationData from "./evaluationData-new.json";
import { useLocation } from "react-router-dom";
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import "../css/Evaluationpage.css";
import { useNavigate } from "react-router-dom";

function EvaluationPage() {
  // const location = useLocation();
  const realEval = {
    correctGrammar: {
      grammar: [
        {
          originalText:
            "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
          corrections: [
            {
              error: {
                en: "Possible spelling mistake",
              },
              suggestions: [
                "essential",
                "essentials",
                "essentially",
                "essential's",
                "inessential",
                "unessential",
              ],
            },
            {
              error: {
                en: "Possible spelling mistake",
              },
              suggestions: [
                "footers",
                "fosters",
                "doters",
                "foyers",
                "voters",
                "fitters",
              ],
            },
          ],
          all: [
            {
              id: "e512831008",
              offset: 12,
              length: 8,
              description: {
                en: "Possible spelling mistake",
              },
              bad: "esential",
              better: [
                "essential",
                "essentials",
                "essentially",
                "essential's",
                "inessential",
                "unessential",
              ],
              type: "spelling",
            },
            {
              id: "e539227561",
              offset: 27,
              length: 6,
              description: {
                en: "Possible spelling mistake",
              },
              bad: "foters",
              better: [
                "footers",
                "fosters",
                "doters",
                "foyers",
                "voters",
                "fitters",
              ],
              type: "spelling",
            },
          ],
        },
        {
          originalText:
            " It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
          corrections: [],
        },
        {
          originalText:
            " Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
          corrections: [
            {
              error: {
                en: "Possible spelling mistake",
              },
              suggestions: [
                "education",
                "deduction",
                "reduction",
                "seduction",
                "educations",
                "diction",
              ],
            },
          ],
          all: [
            {
              id: "e4637292",
              offset: 13,
              length: 8,
              description: {
                en: "Possible spelling mistake",
              },
              bad: "eduction",
              better: [
                "education",
                "deduction",
                "reduction",
                "seduction",
                "educations",
                "diction",
              ],
              type: "spelling",
            },
          ],
        },
      ],
    },
    readability: {
      originalText:
        "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development. It equips individuals with the skills necessary to navigate complex challenges and make informed decisions. Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
      fleschKincaid: {
        readingEase: 0,
        grade: "College graduate",
        interpretation:
          "Very difficult to read. Best understood by university graduates",
      },
      emotion: {
        positive: 0.5,
        negative: 0.5,
      },
      counters: {
        length: 348,
        clearLength: 305,
        words: 44,
        sentences: 3,
      },
      all: {
        fleschKincaid: {
          readingEase: 0,
          grade: "College graduate",
          interpretation:
            "Very difficult to read. Best understood by university graduates",
        },
        gunningFog: 19,
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
          length: 348,
          clearLength: 305,
          words: 44,
          sentences: 3,
        },
      },
    },
    summarize: {
      originalText:
        "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development. It equips individuals with the skills necessary to navigate complex challenges and make informed decisions. Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
      summaries: [
        "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
        "It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
        "Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
      ],
      all: {
        keywords: [
          "informed",
          "make",
          "promoting",
          "citizenship",
          "foters",
          "knowledge",
          "acquisition",
          "critical",
          "thinking",
          "skills",
        ],
        highlight: [],
        summary: [
          "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
          "It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
          "Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
        ],
      },
    },
    rephrase: {
      rephrase: [
        {
          originalText:
            "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development. It equips individuals with the skills necessary to navigate complex challenges and make informed decisions. Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
          rephrasing: [
            {
              hash: "16b592c4-07ef-5ab8-a233-7869fccbf43e",
              model_version: "v20240207",
              original:
                "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The process of learning is indispensable, as it fosters the acquisition of knowledge, enhances critical thinking abilities, and promotes personal growth.",
            },
            {
              hash: "6f8898a7-f8c5-5f37-9fd6-997665672f2c",
              model_version: "v20240207",
              original:
                "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The act of studying is vital, as it nurtures the acquisition of knowledge, strengthens critical thinking skills, and supports individual development.",
            },
            {
              hash: "12a54631-bfb8-5497-84a8-3f45d9359910",
              model_version: "v20240207",
              original:
                "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Learning is a necessary endeavor, as it facilitates the acquisition of knowledge, improves critical thinking, and encourages personal advancement.",
            },
            {
              hash: "7d8c1181-2b42-5660-a1b3-1b9b31c48c78",
              model_version: "v20240207",
              original:
                "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The pursuit of knowledge through studying is essential, as it promotes the acquisition of new information, sharpens critical thinking, and contributes to personal growth.",
            },
            {
              hash: "d5986c30-0a7e-50a1-be7c-c1ff5afe8097",
              model_version: "v20240207",
              original:
                "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Studying is a crucial activity, as it enables the acquisition of knowledge, enhances critical thinking, and fosters personal development.",
            },
          ],
        },
        {
          originalText:
            "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development. It equips individuals with the skills necessary to navigate complex challenges and make informed decisions. Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
          rephrasing: [
            {
              hash: "3f9c9185-5f43-5937-a0a9-53ca077b680b",
              model_version: "v20240207",
              original:
                "It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Empowers individuals with the ability to effectively confront intricate issues and formulate sound judgments.",
            },
            {
              hash: "df3d351f-2550-5e9f-aadc-23c772255cbe",
              model_version: "v20240207",
              original:
                "It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Grants individuals the competence to handle intricate predicaments and arrive at well-considered choices.",
            },
            {
              hash: "6f04f777-897a-58a2-baf1-286970ff2a75",
              model_version: "v20240207",
              original:
                "It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Provides individuals with the expertise to manage intricate dilemmas and make prudent decisions.",
            },
            {
              hash: "650a698a-0c00-54ff-96d7-382a2da2ac7e",
              model_version: "v20240207",
              original:
                "It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Equips individuals with the proficiency to tackle intricate problems and make wise decisions.",
            },
            {
              hash: "07b84661-e45a-528e-abfb-020201a65d8d",
              model_version: "v20240207",
              original:
                "It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Bestows upon individuals the capability to deal with intricate quandaries and make knowledgeable decisions.",
            },
          ],
        },
        {
          originalText:
            "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development. It equips individuals with the skills necessary to navigate complex challenges and make informed decisions. Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
          rephrasing: [
            {
              hash: "640eab21-378c-593e-9cd9-ca7f9a30d135",
              model_version: "v20240207",
              original:
                "Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Education enlarges the scope of professional advancement and fosters societal development through the cultivation of enlightened citizenship and technological innovation.",
            },
            {
              hash: "f96b29eb-3327-5479-982e-a525ff161833",
              model_version: "v20240207",
              original:
                "Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The benefits of education extend beyond individual career growth, as it also encourages informed civic engagement and sparks societal progress through the generation of new ideas and innovations.",
            },
            {
              hash: "ea32e989-444f-599c-bca9-df9b36085a9a",
              model_version: "v20240207",
              original:
                "Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Education not only expands career prospects but also plays a crucial role in societal advancement by fostering informed citizenship and driving innovation.",
            },
            {
              hash: "5cc7351e-6ab3-5129-9b8d-5a25cb3534b8",
              model_version: "v20240207",
              original:
                "Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Beyond personal career gains, education contributes significantly to societal progress by fostering informed citizenship and promoting technological innovation.",
            },
            {
              hash: "ebff6dd9-e9c1-59c2-8963-c9981cac6b4e",
              model_version: "v20240207",
              original:
                "Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Education broadens career horizons and contributes to societal development by fostering informed citizenship and encouraging innovation.",
            },
          ],
        },
      ],
    },
    aidetect: {
      overallScore: 0.9999992725913581,
      sentenceScores: [
        {
          score: 0,
          sentence:
            "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
        },
        {
          score: 0.0974069146466795,
          sentence:
            "It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
        },
        {
          score: 7.150502412400783e-12,
          sentence:
            "Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
        },
      ],
    },
    tone: {
      sentences: [
        "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development.",
        "It equips individuals with the skills necessary to navigate complex challenges and make informed decisions.",
        "Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.",
      ],
      overallSentiment: [
        [0.9956260456902672, "POSITIVE"],
        [0.004373954309732763, "NEUTRAL"],
      ],
      detailedResults: [
        [
          [0.8154947006842121, "POSITIVE"],
          [0.17814044654369354, "NEUTRAL"],
        ],
        [
          [0.9679170846939087, "POSITIVE"],
          [0.011822198517620564, "NEUTRAL"],
        ],
        [
          [0.9902775371447206, "POSITIVE"],
          [0.0026955902576446533, "NEUTRAL"],
        ],
      ],
    },
  };

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
            {evaluationData.overallScore &&
            evaluationData.overallScore.length > 0
              ? `${(evaluationData.overallScore[0].overallScore * 100).toFixed(
                  2
                )}%`
              : "No overall score available."}
          </h3>
          <p style={styles.originalText}>{readabilityScore.originalText}</p>
        </div>
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
