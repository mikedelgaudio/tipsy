import { useNavigate } from "react-router-dom";
import { ExternalLinkIcon } from "../shared/icons";
import "./welcome-view.component.css";

function WelcomeView() {
  const navigate = useNavigate();
  return (
    <section className="welcome-container container c-full-height">
      <div className="welcome-col">
        <h1 className="header">The smarter way to get paid back</h1>
        <div className="welcome-subheader-container">
          <p className="paragraph-1">
            Paid for a night out with friends or a large dinner party?
          </p>
          <p className="paragraph-1">
            Add the items from your receipt and determine how much each person
            owes you with tip and tax included.
          </p>
        </div>

        <div className="welcome-action-row">
          <a href="#" className="btn secondary">
            GitHub{" "}
            <span>
              <ExternalLinkIcon className="icons icon-sm" />
            </span>
          </a>
          <button
            className="btn btn-success"
            onClick={() => navigate("/calculate")}
          >
            Get Started
          </button>
        </div>
      </div>
      <div className="welcome-col">
        <img
          className="welcome-img"
          src="https://via.placeholder.com/1000"
          alt="Money sharing"
        ></img>
      </div>
    </section>
  );
}

export { WelcomeView };
