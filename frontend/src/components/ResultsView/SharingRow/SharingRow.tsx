import "./SharingRow.css";
import EditBtn from "../../shared/buttons/EditBtn";
import CloseBtn from "../../shared/buttons/CloseBtn";
import ShareSquareIcon from "../../shared/icons/ShareSquareIcon";

function SharingRow({ editing, setEditing }: any) {
  return (
    <div className="sharingRow">
      {!editing ? (
        <EditBtn
          clickSideEffect={() => setEditing(true)}
          ariaTitle={"Edit event title"}
          className="icon-light"
        />
      ) : (
        <CloseBtn
          clickSideEffect={() => setEditing(false)}
          ariaTitle={"Stop editing event title"}
          className="icon-light"
        />
      )}
      <button>
        <ShareSquareIcon className="icons icon-light" />
      </button>
    </div>
  );
}

export default SharingRow;
