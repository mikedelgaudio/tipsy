import { observer } from "mobx-react";
import { EditBtnNew } from "../../../shared/buttons/edit-btn.component";
import "./event-header-actions.component.css";

const EventHeaderActions = observer(({ editing, setEditing }: any) => {
  return (
    <div className="eventHeaderActionsRow">
      <EditBtnNew
        clickSideEffect={() => setEditing(!editing)}
        editing={editing}
        ariaTitle={"title"}
      />
    </div>
  );
});

export { EventHeaderActions };
