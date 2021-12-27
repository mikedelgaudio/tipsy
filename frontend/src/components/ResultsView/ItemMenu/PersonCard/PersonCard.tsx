import { Item } from "../../../../models/custom-models";
import PersonActions from "./PersonActions/PersonActions";
import "./PersonCard.css";

function PersonCard({ personData, itemsData }: any) {
  return (
    <div className="personCard">
      <div className="personCardHeader">
        <h2>{personData.name}</h2>
        <PersonActions />
      </div>

      <ul className="personItemList">
        {itemsData.map((item: Item) => {
          return (
            <li className="personItem" key={item.id}>
              <span className="personItemDesc">{item.name}</span>
              <span className="personItemPrice">${item.price}</span>
            </li>
          );
        })}
      </ul>

      <div className="subtotalWrapper">
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
            <span className="subtotalPrice">${personData.tipAndTax}</span>
          </li>
          <li className="subtotalItem">
            <span className="subtotalPrice">${personData.totalDue}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PersonCard;
