import "./EventFooterActions.css";
import { ShareBtn } from "../../shared/buttons/shareBtn.component";
import { ResetBtn } from "../../shared/buttons/resetBtn.component";

function EventFooterActions() {
  return (
    <div className="eventFooterRow">
      <ResetBtn />
      <ShareBtn />
    </div>
  );
}

export default EventFooterActions;
