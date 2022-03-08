import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { didMount } from "../../../../hooks/didMount";
import { didClickAway } from "../../../../hooks/didClickAway";
import { AppStore, Item, Person } from "../../../../models/custom-models";
import { editPersonName } from "../../../../redux/calculation/calculation-actions";
import ItemRow from "./ItemRow/ItemRow";
import PersonActions from "./PersonActions/PersonActions";
import "./PersonCard.css";
import { validString } from "../../../../utilities/sanitize";
import { dismissToast, errorToast } from "../../../shared/toasts/toasts";
import { ERROR_INPUT_NAME } from "../../../../utilities/variables";

function PersonCard({ personId }: any) {
  // Store Selectors
  const storePersonData = useSelector((state: AppStore) => {
    return state.calculation.persons.find(
      (person: Person) => person.id === personId,
    );
  });

  const storeItemsIds = useSelector((state: AppStore) => {
    return state.calculation.items.map((item: Item) => {
      if (item.personId === personId) return item.id;
    });
  });

  const storePersonIndex = useSelector((state: AppStore) => {
    return (
      state.calculation.persons.findIndex(
        (person: Person) => person.id === personId,
      ) + 1
    );
  });

  const didMountOnce = didMount();
  const dispatch = useDispatch();
  const toastId = useRef(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(false);
  const [personNameInput, setPersonNameInput] = useState(storePersonData?.name);
  const personRef = useRef(null);
  didClickAway(personRef, editing, setEditing);

  const personNameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setError(!validString(e.target.value));
    setPersonNameInput(e.target.value);
  };

  useEffect(() => {
    setPersonNameInput(storePersonData?.name);
  }, [storePersonData?.name]);

  useEffect(() => {
    if (!didMountOnce && !editing) {
      error
        ? errorToast(toastId, ERROR_INPUT_NAME(storePersonData?.name))
        : dismissToast(toastId);

      if (storePersonData?.name !== personNameInput) {
        dispatch(
          editPersonName(
            personId,
            !error ? personNameInput : storePersonData?.name,
          ),
        );
      }
    }
  }, [editing]);

  return (
    <div className="personCard" ref={personRef}>
      <div className="personCardHeader">
        {!editing ? (
          <h2 className="personName">{storePersonData?.name}</h2>
        ) : (
          <div className="inputWrapper">
            <label htmlFor={`personNameInput-${personId}`}>
              Person {storePersonIndex} Name
            </label>
            <input
              id={`personNameInput-${personId}`}
              type="text"
              onChange={personNameInputHandler}
              value={personNameInput || ""}
            />
          </div>
        )}
        <PersonActions
          personId={personId}
          editing={editing}
          setEditing={setEditing}
        />
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
            <p className="subtotalTitle">Tip and Tax</p>
          </li>
          <li className="subtotalItem">
            <p className="subtotalTitle">Total Due</p>
          </li>
        </ul>
        <ul className="subtotalList">
          <li className="subtotalItem">
            <p className="subtotalPrice">${storePersonData?.tipAndTax}</p>
          </li>
          <li className="subtotalItem">
            <p className="subtotalPrice">${storePersonData?.totalDue}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PersonCard;
