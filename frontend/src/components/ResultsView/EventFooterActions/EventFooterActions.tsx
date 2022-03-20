import "./EventFooterActions.css";
import ShareBtn from "../../shared/buttons/ShareBtn";
import ResetBtn from "../../shared/buttons/ResetBtn";

function EventFooterActions() {
  return (
    <div className="eventFooterRow">
      <ResetBtn />
      <ShareBtn />
    </div>
  );
}

export default EventFooterActions;
