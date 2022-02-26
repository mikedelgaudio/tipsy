import "./SharingRow.css";
import EditBtn from "../../shared/buttons/EditBtn";
import CloseBtn from "../../shared/buttons/CloseBtn";
import ShareSquareIcon from "../../shared/icons/ShareSquareIcon";
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
          className="icon-light icon-xl"
        />
      ) : (
        <CloseBtn
          clickSideEffect={() => setEditing(false)}
          ariaTitle={"Stop editing event title"}
          className="icon-light icon-xl"
        />
      )}
      <button>
        <ShareSquareIcon className="icons icon-light icon-xl" />
      </button>
      <button onClick={() => dispatch(addPerson())} aria-label="Add person">
        <AddPersonIcon className="icons icon-xl icon-light" />
      </button>
      <button onClick={() => dispatch(restartEvent())} className="btn-danger">
        Reset
      </button>
    </div>
  );
}

export default SharingRow;
