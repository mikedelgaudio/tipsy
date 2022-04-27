import { observer } from "mobx-react";
import { CloseBtn, EditBtn, ResetBtn } from "../../../shared/buttons";
import "./event-header-actions.component.css";

const EventHeaderActions = observer(({ editing, setEditing }: any) => {
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
      <ResetBtn />
    </div>
  );
});

export { EventHeaderActions };
