import { APP_VERSION, GITHUB_URL } from "../../utilities/variables";
import "./navbar.component.css";

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav-wrapper">
          <a className="nav-logo" href="/">
            Tipsy
          </a>
          <div>
            <p>{APP_VERSION}</p>
            <a href={GITHUB_URL} target="_blank">
              GitHub
              <span>
                <svg
                  className="icons icon-light icon-sm"
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
