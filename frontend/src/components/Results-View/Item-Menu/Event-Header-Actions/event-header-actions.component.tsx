import { observer } from "mobx-react";
import { useContext } from "react";
import { StoreContext } from "../../../../store.context";
import { AddPersonBtn, CloseBtn, EditBtn } from "../../../shared/buttons";
import "./event-header-actions.component.css";

const EventHeaderActions = observer(({ editing, setEditing }: any) => {
  const { calculationStore } = useContext(StoreContext);
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
        clickSideEffect={() => calculationStore.addPerson()}
        ariaTitle={"Add person"}
        iconClassName="icon-xl"
      />
    </div>
  );
});

export { EventHeaderActions };
