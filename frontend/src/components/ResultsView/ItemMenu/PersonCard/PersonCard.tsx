import { ChangeEvent, useEffect, useState } from "react";
import { connect, RootStateOrAny } from "react-redux";
import { Item } from "../../../../models/custom-models";
import { editPersonName } from "../../../../redux/calculation/calculation-actions";
import ItemRow from "./ItemRow/ItemRow";
import PersonActions from "./PersonActions/PersonActions";
import "./PersonCard.css";

function PersonCard({
  personData,
  itemsData,
  storeUiEditPersonId,
  dispatchEditPersonName,
}: any) {
  // Is this person being edited?
  const editing = storeUiEditPersonId === personData.id;

  const [personNameInput, setPersonNameInput] = useState(personData.name);

  const personNameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonNameInput(e.target.value);
    dispatchEditPersonName(personData.id, e.target.value);
  };

  useEffect(() => {
    setPersonNameInput(personData.name);
  }, [personData.name]);

  return (
    <div className="personCard">
      <div className="personCardHeader">
        {!editing ? (
          <h2>{personData.name}</h2>
        ) : (
          <input
            type="text"
            onChange={personNameInputHandler}
            value={personNameInput || ""}
          />
        )}
        <PersonActions personId={personData.id} />
      </div>

      {/* TOOD:
          Rather than sending as children props, 
          send the item ID and use state in the component to render from store */}
      <ul className="personItemList">
        {itemsData.map((item: Item) => {
          return <ItemRow key={item.id} item={item} editing={editing} />;
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

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    storeUiEditPersonId: state.ui.uiEditPersonId,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchEditPersonName: (personId: string, newName: string) =>
      dispatch(editPersonName(personId, newName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonCard);
