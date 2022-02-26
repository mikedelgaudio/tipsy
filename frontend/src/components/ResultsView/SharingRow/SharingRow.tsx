import "./SharingRow.css";
import shareIcon from "../../../assets/icons/share-square-solid.svg";
import EditBtn from "../../shared/buttons/EditBtn";
import CloseBtn from "../../shared/buttons/CloseBtn";

function SharingRow({ editing, setEditing }: any) {
  return (
    <div className="sharingRow">
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
      <button type="button">
        <img className="icons" src={shareIcon} alt="Share" />
      </button>
    </div>
  );
}

export default SharingRow;
