import "./Navbar.css";
import { APP_VERSION } from "../../utilities/variables";

function Navbar() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-wrapper">
          <h1>Tipsy</h1>
          <div>
            <p>{APP_VERSION}</p>
            <a href="https://github.com/mikedelgaudio/tipsy" target="_blank">
              @mikedelgaudio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
