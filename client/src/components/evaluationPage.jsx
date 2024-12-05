import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft, FaSun, FaMoon } from "react-icons/fa";
import "../css/Evaluationpage.css";
import { useNavigate } from "react-router-dom";

function EvaluationPage() {
  // const location = useLocation();
  const mainText =
    "Studying is esential as it foters knowledge acquisition, critical thinking, and personal development. It equips individuals with the skills necessary to navigate complex challenges and make informed decisions. Furthermore, eduction enhances career opportunities and contributes to societal progress by promoting informed citizenship and innovation.";
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
  // const mainText = location.state?.originalText;
  // const realEval = location.state?.evaluationData;

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
      <div className="page-container">
        <div className="left-column">
          <div className="square">
            <h3
              className={`square-title ${hoveredSection === "grammar" ? "square-title-hover" : ""}`}
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
                          className={`list-item ${hoveredIssueIndex === index ? "list-item-hover" : ""}`}
                          onMouseEnter={() => setHoveredIssueIndex(index)}
                          onMouseLeave={() => setHoveredIssueIndex(null)}
                          onClick={() => toggleGrammarIssue(index)}
                        >
                          <h4 className="list-title">
                            Grammar Issue {index + 1}
                          </h4>

                          <p className="error-text" style={{ fontSize: "14px" }}>
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
                              <p className="suggestions-title">
                                Suggestions:
                              </p>
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
              className={`square-title ${hoveredSection === "readability" ? "square-title-hover" : ""}`}
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
                      <strong>Reading Ease:</strong> {readabilityScore.fleschKincaid.readingEase}
                    </p>
                    <p className="text-block">
                      <strong>Grade Level:</strong> {readabilityScore.fleschKincaid.grade}
                    </p>
                    <p className="text-block">
                      <strong>Interpretation:</strong> {readabilityScore.fleschKincaid.interpretation}
                    </p>
                  </div>
                ) : (
                  <p className="empty-text">
                    No readability score available. We can only calculate a readability score when you have at least 40 words.
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="square">
            <h3
              className={`square-title ${hoveredSection === "summarized" ? "square-title-hover" : ""}`}
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
                      className={`list-item ${hoveredItem === index ? "list-item-hover" : ""}`}
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
              className={`square-title ${hoveredSection === "rephrase" ? "square-title-hover" : ""}`}
              onMouseEnter={() => setHoveredSection("rephrase")}
              onMouseLeave={() => setHoveredSection(null)}
              onClick={() => toggleSection("rephrase")}
            >
              Rephrased Text
            </h3>

            {expandedSections.rephrase && (
              <div>
                {rephrased.length > 0 ? (
                  rephrased.map((entry, index) => (
                    <div
                      key={index}
                      className={`list-item ${hoveredItem === index ? "list-item-hover" : ""}`}
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
                          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
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
              className={`square-title ${expandedSections.aiDetect ? "square-title-active" : ""}`}
              onClick={() => toggleSection("aiDetect")}
            >
              AI Detection Breakdown
            </h3>

            {/* Scrollable content for AI Detection */}
            {expandedSections.aiDetect && (
              <div className="scrollable-content">
                {aidetect.sentenceScores?.length > 0 ? (
                  aidetect.sentenceScores.map((sentenceData, index) => (
                    <div key={index} className="list-item">
                      <p className="score-text">
                        Sentence: {sentenceData.sentence}
                      </p>
                      <p className="score-text">
                        Score: {(sentenceData.score * 100).toFixed(2)}%
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="empty-text">
                    No AI detection data available.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Tone Analysis Section */}
          <div className="square">
            <h3
              className={`square-title ${expandedSections.toneAnalysis ? "square-title-active" : ""}`}
              onClick={() => toggleSection("toneAnalysis")}
            >
              Detailed Tone Analysis
            </h3>

            {/* Scrollable content for Tone Analysis */}
            {expandedSections.toneAnalysis && (
              <div className="scrollable-content">
                <h4 className="list-title">Detailed Sentiment Analysis</h4>
                {tone.detailedResults.map((resultData, index) => (
                  <div key={index} className="list-item">
                    <h5 className="list-title">
                      Sentence: {tone.sentences[index].split(" ").slice(0, 3).join(" ")}...
                    </h5>
                    {resultData.map((sentimentData, idx) => (
                      <p key={idx} className="score-text">
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
          <div className="full-scores-container">
            {/* Positive Tone */}
            <div className={`score-container ${tone && tone.overallSentiment && tone.overallSentiment[0][1].toLowerCase() + "-tone"}`}>
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
            <div className={`score-container ${tone && tone.overallSentiment && tone.overallSentiment[1][1].toLowerCase() + "-tone"}`}>
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
              <h3 className={`score-value ${aidetect && aidetect.overallScore > 0.5 ? "highlight" : ""}`}>
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

          <div className="note"> 
            Note: AI detection can be inaccurate. 
          </div>
        </div>
                  
      </div>
    </div>
  );
}


export default EvaluationPage;
