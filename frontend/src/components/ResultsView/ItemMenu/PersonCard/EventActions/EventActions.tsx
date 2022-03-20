import "./EventActions.css";
import EditBtn from "../../../../shared/buttons/EditBtn";
import CloseBtn from "../../../../shared/buttons/CloseBtn";
import { useDispatch } from "react-redux";
import { addPerson } from "../../../../../redux/calculation/calculation-actions";
import AddPersonBtn from "../../../../shared/buttons/AddPersonBtn";

function EventActions({ editing, setEditing }: any) {
  const dispatch = useDispatch();
  return (
    <div className="eventActionsRow">
      {!editing ? (
        <EditBtn
          clickSideEffect={() => setEditing(true)}
          ariaTitle={"Edit event title"}
        />
      ) : (
        <CloseBtn
          clickSideEffect={() => setEditing(false)}
          ariaTitle={"Stop editing event title"}
        />
      )}
      <AddPersonBtn
        clickSideEffect={() => dispatch(addPerson())}
        ariaTitle={"Add person"}
        iconClassName="icon-xl"
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

export default EventActions;