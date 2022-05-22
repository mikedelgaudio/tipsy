import { computed } from "mobx";
import { observer } from "mobx-react";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { didClickAway, didMount } from "../../../../../hooks";
import { Item } from "../../../../../models/item.model";
import { Person } from "../../../../../models/person.model";
import { StoreContext } from "../../../../../store.context";
import { ItemsView } from "./Item-View/item-view.component";
import { PersonActions } from "./Person-Actions";
import "./person-card.component.css";

const PersonCard = observer(({ person }: { person: Person }) => {
  const { calculationStore } = useContext(StoreContext);

  const items: Item[] = computed(() =>
    calculationStore.getPersonItems(person.id),
  ).get();

  const didMountOnce = didMount();
  const [editing, setEditing] = useState(false);
  const [personNameInput, setPersonNameInput] = useState(person.name);
  const personRef = useRef(null);
  didClickAway(personRef, editing, setEditing);

  const personNameInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPersonNameInput(e.target.value);
  };

  useEffect(() => {
    setPersonNameInput(person.name);
  }, [person.name]);

  useEffect(() => {
    if (!didMountOnce && !editing) {
      if (person.name !== personNameInput) {
        if (personNameInput)
          calculationStore.editPersonName(person.id, personNameInput);
      }
    }
  }, [editing]);

  return (
    <div className="personCard" ref={personRef}>
      <div className="personCardHeader">
        {!editing ? (
          <h2
            className={`${person.errorName ? "errorText" : ""} personName`}
            data-cy={`${person.name}-personName`}
          >
            {person.name}
          </h2>
        ) : (
          <div className="inputWrapper">
            <label htmlFor={`personNameInput-${person.id}`}>
              "{person.name}" Name
            </label>
            <input
              id={`personNameInput-${person.id}`}
              type="text"
              onChange={personNameInputHandler}
              value={personNameInput || ""}
            />
          </div>
        )}
        <PersonActions
          personId={person.id}
          editing={editing}
          setEditing={setEditing}
        />
      </div>

      <ul className="personItemList">
        <ItemsView items={items} editing={editing} />
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
            <p className="subtotalPrice" data-cy={`${person.name}-tipAndTax`}>
              ${person.tipAndTax}
            </p>
          </li>
          <li className="subtotalItem">
            <p className="subtotalPrice" data-cy={`${person.name}-totalDue`}>
              ${person.totalDue}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
});

export { PersonCard };
