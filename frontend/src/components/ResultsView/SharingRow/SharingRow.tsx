import "./SharingRow.css";
import EditBtn from "../../shared/buttons/EditBtn";
import CloseBtn from "../../shared/buttons/CloseBtn";
import { useDispatch } from "react-redux";
import {
  addPerson,
  restartEvent,
} from "../../../redux/calculation/calculation-actions";
import AddPersonIcon from "../../shared/icons/AddPersonIcon";

function SharingRow({ editing, setEditing }: any) {
  const dispatch = useDispatch();
  return (
    <div className="sharingRow">
      {!editing ? (
        <EditBtn
          clickSideEffect={() => setEditing(true)}
          ariaTitle={"Edit event title"}
        />
      ) : (
        <CloseBtn
          clickSideEffect={() => setEditing(false)}
          ariaTitle={"Stop editing event title"}
          className="btn-success-dark"
        />
      )}
      <button onClick={() => dispatch(addPerson())} aria-label="Add person">
        <AddPersonIcon className="icons icon-xl icon-light" />
      </button>
      {/* <input
        className="btn-danger"
        type="reset"
        onClick={() => dispatch(restartEvent())}
        value="Reset"
      /> */}
    </div>
  );
}

export default SharingRow;
