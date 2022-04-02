import "./EventHeaderActions.css";
import { EditBtn } from "../../../shared/buttons/editBtn.component";
import { CloseBtn } from "../../../shared/buttons/closeBtn.component";
import { useDispatch } from "react-redux";
import { addPerson } from "../../../../redux/calculation/calculation-actions";
import { AddPersonBtn } from "../../../shared/buttons/addPersonBtn.component";

function EventHeaderActions({ editing, setEditing }: any) {
  const dispatch = useDispatch();
  return (
    <div className="eventHeaderActionsRow">
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
    </div>
  );
}

export default EventHeaderActions;
