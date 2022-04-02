import "./eventHeaderActions.component.css";
import { EditBtn, CloseBtn, AddPersonBtn } from "../../../shared/buttons";
import { useDispatch } from "react-redux";
import { addPerson } from "../../../../redux/calculation/calculation-actions";

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

export { EventHeaderActions };
