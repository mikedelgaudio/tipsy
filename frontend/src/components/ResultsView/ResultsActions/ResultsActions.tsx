import { connect } from "react-redux";

import {
  addPerson,
  restartEvent,
} from "../../../redux/calculation/calculation-actions";
import "./ResultsActions.css";
import addPersonIcon from "../../../assets/icons/add-person.svg";

function ResultsActions({
  restartEvent,
  addPerson,
}: {
  restartEvent: Function;
  addPerson: Function;
}) {
  return (
    <div className="resultsActionsWrapper">
      <button onClick={() => restartEvent()} className="btn-danger">
        Reset
      </button>
      <button
        onClick={() => addPerson()}
        className="btn-success"
        aria-label="Add person"
      >
        <img className="icons" src={addPersonIcon} alt="Add person" />
      </button>
    </div>
  );
}

// may need to recalc
const mapDispatchToProps = (dispatch: any) => {
  return {
    restartEvent: () => dispatch(restartEvent()),
    addPerson: () => dispatch(addPerson()),
  };
};

export default connect(null, mapDispatchToProps)(ResultsActions);
