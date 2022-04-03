import "./navbar.component.css";
import { APP_VERSION } from "../../utilities/variables";
import { ExternalLinkIcon } from "../shared/icons";

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
            <a href="https://github.com/mikedelgaudio/tipsy" target="_blank">
              GitHub
              <span>
                <ExternalLinkIcon className="icons icon-light icon-sm" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export { Navbar };
