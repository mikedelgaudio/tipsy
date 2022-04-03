import { ExternalLinkIcon } from "../shared/icons";
import "./welcome-view.component.css";

function WelcomeView() {
  return (
    <section className="welcome-container container">
      <div className="welcome-col">
        <h1 className="welcome-header">The smarter way to get paid back</h1>
        <div className="welcome-subheader-container">
          <p>Paid for a night out with friends or a large dinner party?</p>
          <p>
            Add the items from your receipt and determine how much each person
            owes you with tip and tax included.
          </p>
        </div>

        <div className="welcome-action-row">
          <button className="btn secondary">
            GitHub{" "}
            <span>
              <ExternalLinkIcon className="icons icon-sm" />
            </span>
          </button>
          <button className="btn btn-success">Get Started</button>
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
