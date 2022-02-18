import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppStore, Item, Person } from "../../../../models/custom-models";
import { editPersonName } from "../../../../redux/calculation/calculation-actions";
import ItemRow from "./ItemRow/ItemRow";
import PersonActions from "./PersonActions/PersonActions";
import "./PersonCard.css";

function PersonCard({ personId }: any) {
  const dispatch = useDispatch();

  const storePersonData = useSelector((state: AppStore) => {
    return state.calculation.persons.find(
      (person: Person) => person.id === personId
    );
  });

  const storeItemsIds = useSelector((state: AppStore) => {
    return state.calculation.items.map((item: Item) => {
      if (item.personId === personId) return item.id;
    });
  });

  // Is this person being edited?
  const editing = useSelector(
    (state: AppStore) => state.ui.uiEditPersonId === personId
  );

  const [personNameInput, setPersonNameInput] = useState(storePersonData?.name);

  const personNameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonNameInput(e.target.value);
    dispatch(editPersonName(personId, e.target.value));
  };

  useEffect(() => {
    setPersonNameInput(storePersonData?.name);
  }, [storePersonData?.name]);

  return (
    <div className="personCard">
      <div className="personCardHeader">
        {!editing ? (
          <h2>{storePersonData?.name}</h2>
        ) : (
          <input
            type="text"
            onChange={personNameInputHandler}
            value={personNameInput || ""}
          />
        )}
        <PersonActions personId={personId} />
      </div>

      <ul className="personItemList">
        {storeItemsIds.map((itemId: string | undefined) => {
          if (itemId)
            return <ItemRow key={itemId} itemId={itemId} editing={editing} />;
        })}
      </ul>

      <div className="subtotalWrapper">
        <ul className="subtotalList">
          <li className="subtotalItem">
            <span className="subtotalTitle">Tip and Tax</span>
          </li>
          <li className="subtotalItem">
            <span className="subtotalTitle">Total Due</span>
          </li>
        </ul>
        <ul className="subtotalList">
          <li className="subtotalItem">
            <span className="subtotalPrice">${storePersonData?.tipAndTax}</span>
          </li>
          <li className="subtotalItem">
            <span className="subtotalPrice">${storePersonData?.totalDue}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PersonCard;
