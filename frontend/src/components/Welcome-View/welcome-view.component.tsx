import { useNavigate } from "react-router-dom";
import { GITHUB_URL } from "../../utilities/variables";
import { WelcomeViewAsset } from "./welcome-view.asset.component";
import "./welcome-view.component.css";

function WelcomeView() {
  const navigate = useNavigate();
  return (
    <section className="welcome-container container c-full-height loaded">
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
          <a href={GITHUB_URL} target="_blank" className="btn secondary">
            GitHub{" "}
            <span>
              <svg
                className="icons icon-sm"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M432 320h-32a16 16 0 0 0-16 16v112H64V128h144a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16H48a48 48 0 0 0-48 48v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V336a16 16 0 0 0-16-16ZM488 0H360c-21.37 0-32.05 25.91-17 41l35.73 35.73L135 320.37a24 24 0 0 0 0 34L157.67 377a24 24 0 0 0 34 0l243.61-243.68L471 169c15 15 41 4.5 41-17V24a24 24 0 0 0-24-24Z"
                />
              </svg>
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
        <WelcomeViewAsset />
      </div>
    </section>
  );
}

export { WelcomeView };
