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
          iconClassName="icon-light icon-xl"
        />
      ) : (
        <CloseBtn
          clickSideEffect={() => setEditing(false)}
          ariaTitle={"Stop editing event title"}
          iconClassName="icon-light icon-xl"
        />
      )}
      <button onClick={() => dispatch(addPerson())} aria-label="Add person">
        <AddPersonIcon className="icons icon-xl icon-light" />
      </button>
      <button className="btn-danger" onClick={() => dispatch(restartEvent())}>
        Reset
      </button>
    </div>
  );
}

export default SharingRow;
