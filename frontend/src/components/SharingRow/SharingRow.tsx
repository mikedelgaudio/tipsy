import "./SharingRow.css";
import shareIcon from "../../assets/icons/share-square-solid.svg";
import copyIcon from "../../assets/icons/copy-regular.svg";

function SharingRow() {
  return (
    <div className="sharingRow">
      <button type="button">
        <img
          className="icons"
          src={shareIcon}
          alt="square with arrow pointing away to open sharing options"
        />
      </button>

      <button type="button">
        <img
          className="icons"
          src={copyIcon}
          alt="two document icons to copy contents to clipboard"
        />
      </button>
    </div>
  );
}

export default SharingRow;
