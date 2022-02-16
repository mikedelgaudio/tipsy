import { connect } from "react-redux";

import {
  addPerson,
  restartEvent,
} from "../../../redux/calculation/calculation-actions";
import "./ResultsActions.css";

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
      <button onClick={() => addPerson()} className="btn-success">
        Add person
      </button>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    restartEvent: () => dispatch(restartEvent()),
    addPerson: () => dispatch(addPerson()),
  };
};

export default connect(null, mapDispatchToProps)(ResultsActions);
