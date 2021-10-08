import Greeting from "./Greeting/Greeting";
import "./InputView.css";

function InputView() {
  return (
    <div className="initWrapper">
      <Greeting />

      <form>
        <div className="question">
          <h2>What was the name of the event?</h2>
          <label>Event name</label>
          <input type="text" required />
        </div>

        <div className="question">
          <h2>What was the final total amount?</h2>
          <small>Ensure this includes the tip and tax.</small>
          <label>Final total</label>
          <input type="text" required />
        </div>

        <div className="question">
          <h2>Let's add people</h2>
          <label>Person name</label>
          <input type="text" required />
        </div>

        <button>Calculate</button>
      </form>
    </div>
  );
}

export default InputView;
