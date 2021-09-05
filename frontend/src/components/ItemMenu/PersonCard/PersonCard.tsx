import "./PersonCard.css";

function PersonCard() {
  return (
    <div className="personCard">
      <h2>Mike</h2>

      <ul className="personItemList">
        <li className="personItem">
          <span className="personItemDesc">Chicken Sandwich</span>
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
          <span>Before Tip and Tax</span>
          <span>$15.12</span>
        </li>
        <li className="subtotalItem">
          <span>Tip and Tax %</span>
          <span>12%</span>
        </li>
        <li className="subtotalItem">
          <span>Tip and Tax $</span>
          <span>$2.45</span>
        </li>
        <li className="subtotalItem">
          <span>Final subtotal</span>
          <span>$17.57</span>
        </li>
      </ul>
    </div>
  );
}

export default PersonCard;
