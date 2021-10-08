import SharingRow from "../SharingRow/SharingRow";
import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";

function ItemMenu() {
  return (
    <div className="itemView">
      <div className="itemMenu">
        <div className="itemHeaderWrapper">
          <h1 className="itemHeader">A night out in town</h1>
          <div className="itemHeaderActions">
            <SharingRow />
          </div>
        </div>

        <PersonCard />
        <PersonCard />
      </div>
    </div>
  );
}

export default ItemMenu;
