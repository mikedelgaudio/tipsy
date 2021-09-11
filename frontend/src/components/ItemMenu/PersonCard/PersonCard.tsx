import PersonActions from "./PersonActions/PersonActions";
import "./PersonCard.css";

function PersonCard() {
  return (
    <div className="personCard">
      <div className="personCardHeader">
        <h2>asdasdsadsadasdasdasdadsadsadsad</h2>
        <PersonActions />
      </div>

      <ul className="personItemList">
        <li className="personItem">
          <span className="personItemDesc">
            Chicken
            asdsadasdsadsadasdsasdsadsdsdasdadasdsadasdasdasdasdsadasdasdasdsadasdasdasdsadadadsaadsadsaSandwich
          </span>
          <span className="personItemPrice">$8.24</span>
        </li>
        <li className="personItem">
          <span className="personItemDesc">Chicken Sandwich</span>
          <span className="personItemPrice">$8.24</span>
        </li>
        <li className="personItem">
          <span className="personItemDesc">Chicken Sandwich</span>
          <span className="personItemPrice">$8.24</span>
        </li>
      </ul>

      <div className="subtotalView">
        <ul className="subtotalList">
          <li className="subtotalItem">
            <span className="subtotalDesc">Tip and Tax</span>
          </li>
          <li className="subtotalItem">
            <span className="subtotalDesc">Total Due</span>
          </li>
        </ul>
        <ul className="subtotalList">
          <li className="subtotalItem">
            <span className="subtotalPrice">$12</span>
          </li>
          <li className="subtotalItem">
            <span className="subtotalPrice">$1086.99</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PersonCard;
