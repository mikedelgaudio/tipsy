import "./eventFooterActions.component.css";
import { ResetBtn, ShareBtn } from "../../shared/buttons";

function EventFooterActions() {
  return (
    <div className="eventFooterRow">
      <ResetBtn />
      <ShareBtn />
    </div>
  );
}

export { EventFooterActions };
