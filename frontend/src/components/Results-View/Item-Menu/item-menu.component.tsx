import { observer } from "mobx-react";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { didClickAway, didMount } from "../../../hooks";
import { StoreContext } from "../../../store.context";
import { EventHeaderActions } from "./Event-Header-Actions";
import "./item-menu.component.css";
import { PersonsView } from "./Person-View/person-view.component";
import { TotalsMenu } from "./Totals-Menu";

const ItemMenu = observer(() => {
  const { calculationStore } = useContext(StoreContext);
  const didMountOnce = didMount();

  const [editing, setEditing] = useState(false);
  const [eventTitleInput, setEventTitleInput] = useState(
    calculationStore.eventName,
  );

  const eventTitleInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEventTitleInput(e.target.value);
  };

  useEffect(() => {
    setEventTitleInput(calculationStore.eventName);
  }, [calculationStore.eventName]);

  // Works as intended, need to do research if this is a bad smell?
  useEffect(() => {
    if (!didMountOnce && !editing) {
      if (calculationStore.eventName !== eventTitleInput) {
        calculationStore.eventName = eventTitleInput;
      }
    }
  }, [editing]);

  const menuRef = useRef(null);
  didClickAway(menuRef, editing, setEditing);

  const persons = calculationStore.persons;

  return (
    <>
      <div className="itemMenu">
        <div className="itemHeaderWrapper" ref={menuRef}>
          {!editing ? (
            <h1 className="itemHeader">{eventTitleInput}</h1>
          ) : (
            <div className="inputWrapper">
              <label htmlFor="eventTitleInput">Event Title</label>
              <input
                id="eventTitleInput"
                type="text"
                onChange={eventTitleInputHandler}
                value={eventTitleInput || ""}
              />
            </div>
          )}
          <div className="itemHeaderActions">
            <EventHeaderActions editing={editing} setEditing={setEditing} />
          </div>
        </div>
        <TotalsMenu />
        <PersonsView persons={persons} />
      </div>
    </>
  );
});

export { ItemMenu };
