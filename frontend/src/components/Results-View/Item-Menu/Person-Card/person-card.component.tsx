import { observer } from "mobx-react";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { didClickAway, didMount } from "../../../../hooks";
import { ItemMobx } from "../../../../models/item.model";
import { PersonMobx } from "../../../../models/person.model";
import { StoreContext } from "../../../../store.context";
import { ItemRow } from "./Item-Row";
import { PersonActions } from "./Person-Actions";
import "./person-card.component.css";

const PersonCard = observer(({ personId }: any) => {
  const { calculationStore } = useContext(StoreContext);

  const storePersonData = calculationStore.persons.find(
    (person: PersonMobx) => person.id === personId,
  );

  const storePersonIndex =
    calculationStore.persons.findIndex(
      (person: PersonMobx) => person.id === personId,
    ) + 1;

  // TODO: Add if check to remove the | undefined
  const storeItemsIds = calculationStore.items.map((item: ItemMobx) => {
    if (item.personId === personId) return item.id;
  });

  const didMountOnce = didMount();
  const [editing, setEditing] = useState(false);
  const [personNameInput, setPersonNameInput] = useState(storePersonData?.name);
  const personRef = useRef(null);
  didClickAway(personRef, editing, setEditing);

  const personNameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonNameInput(e.target.value);
  };

  useEffect(() => {
    setPersonNameInput(storePersonData?.name);
  }, [storePersonData?.name]);

  useEffect(() => {
    if (!didMountOnce && !editing) {
      if (storePersonData?.name !== personNameInput) {
        if (personNameInput)
          calculationStore.editPersonName(personId, personNameInput);
      }
    }
  }, [editing]);

  return (
    <div className="personCard" ref={personRef}>
      <div className="personCardHeader">
        {!editing ? (
          <h2
            // className={`${error ? "errorText" : ""} personName`}
            data-cy={`${storePersonData?.name}-personName`}
          >
            {storePersonData?.name}
          </h2>
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
            <p
              className="subtotalPrice"
              data-cy={`${storePersonData?.name}-tipAndTax`}
            >
              ${storePersonData?.tipAndTax}
            </p>
          </li>
          <li className="subtotalItem">
            <p
              className="subtotalPrice"
              data-cy={`${storePersonData?.name}-totalDue`}
            >
              ${storePersonData?.totalDue}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
});

export { PersonCard };
