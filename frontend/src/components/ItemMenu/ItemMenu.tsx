import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";

function ItemMenu() {
  return (
    <div className="itemView">
      <div className="itemMenu">
        <h1>ChickFilA</h1>

        <PersonCard />
        <PersonCard />
      </div>
    </div>
  );
}

export default ItemMenu;
