import { useDispatch } from "react-redux";
import {
  addPerson,
  restartEvent,
} from "../../../redux/calculation/calculation-actions";
import "./EventActions.css";
import addPersonIcon from "../../../assets/icons/add-person.svg";

function EventActions() {
  const dispatch = useDispatch();

  return (
    <div className="eventActionsWrapper">
      <button onClick={() => dispatch(restartEvent())} className="btn-danger">
        Reset
      </button>
      <button
        onClick={() => dispatch(addPerson())}
        className="btn-success"
        aria-label="Add person"
      >
        <img className="icons" src={addPersonIcon} alt="Add person" />
      </button>
    </div>
  );
}

export default EventActions;
