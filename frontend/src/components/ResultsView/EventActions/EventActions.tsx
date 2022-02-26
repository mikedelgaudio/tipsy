import { useDispatch } from "react-redux";
import {
  addPerson,
  restartEvent,
} from "../../../redux/calculation/calculation-actions";
import "./EventActions.css";
import AddPersonIcon from "../../shared/icons/AddPersonIcon";

function EventActions() {
  const dispatch = useDispatch();

  return (
    <div className="eventActionsWrapper">
      <button onClick={() => dispatch(restartEvent())} className="btn-danger">
        Reset
      </button>
      <button onClick={() => dispatch(addPerson())} aria-label="Add person">
        <AddPersonIcon className="icons icon-xl icon-light" />
      </button>
    </div>
  );
}

export default EventActions;
