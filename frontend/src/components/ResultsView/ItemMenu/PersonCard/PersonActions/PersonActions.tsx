import "./PersonActions.css";
import editIcon from "../../../../../assets/icons/edit-regular.svg";
import deleteIcon from "../../../../../assets/icons/trash-alt-regular.svg";

// TODO:
// Dispatch UI Edit State for Person's Props ID
// Dispatch UI Cancel Edit State for Person's Props ID
// Dispatch UI Delete Person for Person's Props ID

function PersonActions({ personId }: any) {
  return (
    <div className="personActions">
      <button type="button">
        <img className="icons" src={editIcon} alt="edit person" />
      </button>
      <button type="button">
        <img className="icons" src={deleteIcon} alt="delete person" />
      </button>
    </div>
  );
}

export default PersonActions;
