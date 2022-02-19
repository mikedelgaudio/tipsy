import "./SharingRow.css";
import shareIcon from "../../../assets/icons/share-square-solid.svg";
import { useDispatch, useSelector } from "react-redux";
import { uiEditEventTitle } from "../../../redux/ui/ui-actions";
import EditBtn from "../../shared/buttons/EditBtn";
import CloseBtn from "../../shared/buttons/CloseBtn";
import { AppStore } from "../../../models/custom-models";

function SharingRow() {
  const dispatch = useDispatch();

  // Store Selectors
  const storeUiEditTitle = useSelector(
    (state: AppStore) => state.ui.uiEditEventTitle
  );

  return (
    <div className="sharingRow">
      {!storeUiEditTitle ? (
        <EditBtn
          clickSideEffect={() => dispatch(uiEditEventTitle(true))}
          ariaTitle={"Edit event title"}
        />
      ) : (
        <CloseBtn
          clickSideEffect={() => dispatch(uiEditEventTitle(false))}
          ariaTitle={"Stop editing event title"}
        />
      )}
      <button type="button">
        <img className="icons" src={shareIcon} alt="Share" />
      </button>
    </div>
  );
}

export default SharingRow;
