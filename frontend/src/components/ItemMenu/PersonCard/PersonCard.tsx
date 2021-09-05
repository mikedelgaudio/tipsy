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
    </div>
  );
}

export default PersonCard;
