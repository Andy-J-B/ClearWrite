import { useNavigate } from "react-router-dom";
import "../css/IntroPage.css";

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <div className="intro-container">
        <h1>Hello! Welcome to ClearWrite!</h1>
        <p>
          &quot;<strong>Your Guide to Better Writing</strong> &ndash; This tool
          empowers you to enhance your writing skills without doing the work for
          you&quot;.
        </p>

        <div className="intro-content">
          <p className="intro-description">
            Unlike costly grammar checkers or AI writing assistants, ClearWrite
            provides real-time feedback and suggestions to guide students to
            better essays. It&rsquo;s a tool made for students who want to learn
            and improve but can&rsquo;t afford premium services, and for
            teachers who aim to foster learning, not shortcuts and AI usage.
          </p>
        </div>

        <div className="button-group">
          <button className="btn btn-primary" onClick={() => navigate("/home")}>
            Get Started
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate("/FAQ")}
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
