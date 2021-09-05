import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";

function ItemMenu() {
  return (
    <div className="itemView">
      <div className="itemMenu">
        <div className="itemHeaderWrapper">
          <h1 className="itemHeader">ChickFilA</h1>
          <div className="itemHeaderActions">
            <button className="btn-t-success">Add person</button>
            <button className="btn-t-danger">Start over</button>
          </div>
        </div>

        <PersonCard />
        <PersonCard />
      </div>
    </div>
  );
}

export default ItemMenu;
