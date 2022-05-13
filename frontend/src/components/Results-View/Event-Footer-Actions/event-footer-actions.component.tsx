import { useContext } from "react";
import { StoreContext } from "../../../store.context";
import { AddPersonBtn, ResetBtn, ShareBtn } from "../../shared/buttons";
import "./event-footer-actions.component.css";

function EventFooterActions() {
  const { calculationStore } = useContext(StoreContext);

  return (
    <div className="eventFooterRow">
      <ResetBtn />
      <ShareBtn />
      <AddPersonBtn
        clickSideEffect={() => calculationStore.addPerson()}
        ariaTitle={"Add person"}
        iconClassName="icon-xl"
      />
    </div>
  );
}

export { EventFooterActions };
