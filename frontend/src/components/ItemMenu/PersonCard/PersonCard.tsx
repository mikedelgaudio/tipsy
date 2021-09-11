import "./PersonCard.css";

function PersonCard() {
  return (
    <div className="personCard">
      <div className="personCardHeader">
        <h2>asdasdsadsadasdasdasdadsadsadsad</h2>
        <div className="personCardActions">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>

      <ul className="personItemList">
        <li className="personItem">
          <span className="personItemDesc">
            Chicken asdsadasdsadsadasdsadsadsaSandwich
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

      <ul className="subtotalList">
        <li className="subtotalItem">
          <span>Tip and Tax</span>
          <span>$2.45</span>
        </li>
        <li className="subtotalItem">
          <span>Total Due</span>
          <span>$17.57</span>
        </li>
      </ul>
    </div>
  );
}

export default PersonCard;
