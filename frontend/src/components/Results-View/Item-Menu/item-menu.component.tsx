import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppStore, Item, Person } from "../../../models";
import "./item-menu.component.css";
import { PersonCard } from "./Person-Card";
import { useState, useEffect, useRef } from "react";
import {
  editEventTitle,
  recalculateEvent,
} from "../../../redux/calculation/calculation-actions";
import { didClickAway, didMount } from "../../../hooks";
import { dismissToast, errorToast } from "../../shared/toasts/toasts";
import { validString } from "../../../utilities/sanitize";
import { ERROR_INPUT_EVENT } from "../../../utilities/variables";
import { TotalsMenu } from "./Totals-Menu";
import { EventHeaderActions } from "./Event-Header-Actions";

function ItemMenu() {
  const didMountOnce = didMount();
  const dispatch = useDispatch();

  // Store Selectors
  const storeEventTitle = useSelector(
    (state: AppStore) => state.calculation.eventTitle,
  );

  const personIds = useSelector((state: AppStore) => {
    return state.calculation.persons.map((person: Person) => person.id);
  });

  const storeItemsPrices = useSelector(
    (state: AppStore) =>
      state.calculation.items.map((item: Item) => {
        return item.priceFloat;
      }),
    shallowEqual,
  );

  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(false);
  const toastId = useRef(null);
  const [eventTitleInput, setEventTitleInput] = useState(storeEventTitle);

  const eventTitleInputHandler = (e: any) => {
    setError(!validString(e.target.value));
    setEventTitleInput(e.target.value);
  };

  useEffect(() => {
    setEventTitleInput(storeEventTitle);
  }, [storeEventTitle]);

  // Works as intended, need to do research if this is a bad smell?
  useEffect(() => {
    if (!didMountOnce && !editing) {
      error ? errorToast(toastId, ERROR_INPUT_EVENT()) : dismissToast(toastId);

      if (storeEventTitle !== eventTitleInput) {
        dispatch(
          editEventTitle(!error ? eventTitleInput.trim() : storeEventTitle),
        );
      }
    }
  }, [editing]);

  useEffect(() => {
    if (!didMountOnce) dispatch(recalculateEvent());
  }, [storeItemsPrices]);

  const menuRef = useRef(null);
  didClickAway(menuRef, editing, setEditing);

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
        {personIds.map((id: string) => {
          return <PersonCard key={id} personId={id} />;
        })}
      </div>
    </>
  );
}

export { ItemMenu };