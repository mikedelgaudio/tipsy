import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { AppStore, Item, Person } from "../../../models/custom-models";
import SharingRow from "../SharingRow/SharingRow";
import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";
import { useState, useEffect, useRef } from "react";
import {
  editEventTitle,
  recalculateEvent,
} from "../../../redux/calculation/calculation-actions";
import { didMount } from "../../../hooks/didMount";
import { didClickAway } from "../../../hooks/didClickAway";

function ItemMenu() {
  const didMountOnce = didMount();
  const dispatch = useDispatch();

  // Store Selectors
  const storeEventTitle = useSelector(
    (state: AppStore) => state.calculation.eventTitle,
    shallowEqual,
  );

  const personIds = useSelector((state: AppStore) => {
    return state.calculation.persons.map((person: Person) => person.id);
  }, shallowEqual);

  const storeItemsPriceFloats = useSelector(
    (state: AppStore) =>
      state.calculation.items.map((item: Item) => {
        return item.priceFloat;
      }),
    shallowEqual,
  );

  const [editing, setEditing] = useState(false);
  const [eventTitleInput, setEventTitleInput] = useState(storeEventTitle);

  const eventTitleInputHandler = (e: any) => {
    setEventTitleInput(e.target.value);
  };

  useEffect(() => {
    setEventTitleInput(storeEventTitle);
  }, [storeEventTitle]);

  // Works as intended, need to do research if this is a bad smell?
  useEffect(() => {
    if (!didMountOnce && !editing && storeEventTitle !== eventTitleInput) {
      dispatch(editEventTitle(eventTitleInput));
    }
  }, [editing]);

  useEffect(() => {
    if (!didMountOnce) dispatch(recalculateEvent());
  }, [storeItemsPriceFloats]);

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
            <SharingRow editing={editing} setEditing={setEditing} />
          </div>
        </div>
        {personIds.map((id: string) => {
          return <PersonCard key={id} personId={id} />;
        })}
      </div>
    </>
  );
}

export default ItemMenu;
