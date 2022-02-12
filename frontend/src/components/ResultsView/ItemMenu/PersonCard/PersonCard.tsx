import { useEffect, useState } from "react";
import { connect, RootStateOrAny } from "react-redux";
import { Item } from "../../../../models/custom-models";
import { editPersonName } from "../../../../redux/calculation/calculation-actions";
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

  const personNameInputHandler = (e: any) => {
    setPersonNameInput(e.target.value);
    //dispatch
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
          Listen for person edit state with current person id 
          Turn into input fields 
          Dispatch saved values to store and re-calculate */}
      <ul className="personItemList">
        {itemsData.map((item: Item) => {
          return (
            <li className="personItem" key={item.id}>
              <div className="personItemInfoRow">
                {!editing ? (
                  <>
                    <span className="personItemDesc">{item.name}</span>
                    <span className="personItemPrice">${item.price}</span>
                  </>
                ) : (
                  <>
                    <input type="text" />
                    <input type="text" />
                  </>
                )}
              </div>

              <div className="personItemOptionRow">
                <button>Split?</button>
                <button>Delete</button>
              </div>
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
