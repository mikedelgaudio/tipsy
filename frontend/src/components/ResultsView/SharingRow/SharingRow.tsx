import "./SharingRow.css";
import shareIcon from "../../../assets/icons/share-square-solid.svg";
import editIcon from "../../../assets/icons/edit-regular-white.svg";
import checkIcon from "../../../assets/icons/check-square-regular-white.svg";
import { connect, RootStateOrAny } from "react-redux";
import { uiEditEventTitle } from "../../../redux/ui/ui-actions";

function SharingRow({ uiEditTitle, setUiEditTitle }: any) {
  const closeBtn = () => {
    return (
      <button
        type="button"
        onClick={() => setUiEditTitle(false)}
        title="Stop Editing Event Title"
      >
        <img className="icons" src={checkIcon} alt="stop editing event title" />
      </button>
    );
  };

  const editBtn = () => {
    return (
      <button
        type="button"
        onClick={() => setUiEditTitle(true)}
        title="Edit Event Title"
      >
        <img className="icons" src={editIcon} alt="edit event title" />
      </button>
    );
  };

  return (
    <div className="sharingRow">
      {!uiEditTitle ? editBtn() : closeBtn()}
      <button type="button">
        <img
          className="icons"
          src={shareIcon}
          alt="square with arrow pointing away to open sharing options"
        />
      </button>
    </div>
  );
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    uiEditTitle: state.ui.uiEditEventTitle,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setUiEditTitle: (enabled: boolean) => dispatch(uiEditEventTitle(enabled)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SharingRow);
