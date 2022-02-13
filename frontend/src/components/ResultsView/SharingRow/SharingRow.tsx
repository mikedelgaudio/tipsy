import "./SharingRow.css";
import shareIcon from "../../../assets/icons/share-square-solid.svg";
import { connect, RootStateOrAny } from "react-redux";
import { uiEditEventTitle } from "../../../redux/ui/ui-actions";
import EditBtn from "../../shared/buttons/EditBtn";
import CloseBtn from "../../shared/buttons/CloseBtn";

function SharingRow({ storeUiEditTitle, dispatchUiEditTitle }: any) {
  return (
    <div className="sharingRow">
      {!storeUiEditTitle ? (
        <EditBtn
          clickSideEffect={dispatchUiEditTitle}
          ariaTitle={"Edit event title"}
        />
      ) : (
        <CloseBtn
          clickSideEffect={dispatchUiEditTitle}
          ariaTitle={"Stop editing event title"}
        />
      )}
      <button type="button">
        <img className="icons" src={shareIcon} alt="Share" />
      </button>
    </div>
  );
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    storeUiEditTitle: state.ui.uiEditEventTitle,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchUiEditTitle: (enabled: boolean) =>
      dispatch(uiEditEventTitle(enabled)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SharingRow);
