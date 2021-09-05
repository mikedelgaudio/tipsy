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

      {/* <ul className="subtotalList">
        <li>
          <span>Before Tip and Tax</span>
        </li>
        <li>
          <span>Tip and Tax % Due</span>
        </li>
        <li>
          <span>Tip and Tax $ Due</span>
        </li>
        <li>
          <span>Final subtotal</span>
        </li>
      </ul> */}
    </div>
  );
}

export default PersonCard;
