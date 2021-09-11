import "./PersonActions.css";
import editIcon from "../../../../assets/icons/edit-regular.svg";
import deleteIcon from "../../../../assets/icons/trash-alt-regular.svg";

function PersonActions() {
  return (
    <div className="personActions">
      <button type="button">
        <img
          className="icons"
          src={editIcon}
          alt="square with arrow pointing away to open sharing options"
        />
      </button>
      <button type="button">
        <img
          className="icons"
          src={deleteIcon}
          alt="square with arrow pointing away to open sharing options"
        />
      </button>
    </div>
  );
}

export default PersonActions;
