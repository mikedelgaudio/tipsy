import { ExternalLinkIcon } from "../shared/icons";
import "./welcomeView.component.css";

function WelcomeView() {
  return (
    <section className="welcome-container container">
      <div className="welcome-col">
        <h1 className="welcome-header">The smarter way to get paid back</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error natus,
          quasi perspiciatis aspernatur nihil voluptatum. Quaerat officia est
          voluptatem placeat minus, excepturi quia ut exercitationem itaque
          molestias facere repellendus? Ratione.
        </p>
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
