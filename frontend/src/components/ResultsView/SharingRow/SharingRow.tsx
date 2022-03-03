import "./SharingRow.css";
import EditBtn from "../../shared/buttons/EditBtn";
import CloseBtn from "../../shared/buttons/CloseBtn";
import { useDispatch } from "react-redux";
import {
  addPerson,
  restartEvent,
} from "../../../redux/calculation/calculation-actions";
import AddPersonIcon from "../../shared/icons/AddPersonIcon";
import AddPersonBtn from "../../shared/buttons/AddPersonBtn";

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
      <AddPersonBtn
        clickSideEffect={() => dispatch(addPerson())}
        ariaTitle={"Add person"}
        className="icon-xl icon-light"
      />
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
