import { useDispatch, useSelector } from "react-redux";
import { AppStore, Person } from "../../../models/custom-models";
import SharingRow from "../SharingRow/SharingRow";
import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";
import { useState, useEffect } from "react";
import { editEventTitle } from "../../../redux/calculation/calculation-actions";
import { didMount } from "../../../hooks/didMount";

function ItemMenu() {
  const didMountOnce = didMount();
  const dispatch = useDispatch();

  // Store Selectors
  const storeEventTitle = useSelector(
    (state: AppStore) => state.calculation.eventTitle
  );

  const personIds = useSelector((state: AppStore) => {
    return state.calculation.persons.map((person: Person) => person.id);
  });

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
    if (!didMountOnce && !editing) {
      dispatch(editEventTitle(eventTitleInput));
    }
  }, [editing]);

  return (
    <div className="itemView">
      <div className="itemMenu">
        <div className="itemHeaderWrapper">
          {!editing ? (
            <h1 className="itemHeader">{eventTitleInput}</h1>
          ) : (
            <input
              type="text"
              onChange={eventTitleInputHandler}
              value={eventTitleInput || ""}
            />
          )}
          <div className="itemHeaderActions">
            <SharingRow editing={editing} setEditing={setEditing} />
          </div>
        </div>
        {personIds.map((id: string) => {
          return <PersonCard key={id} personId={id} />;
        })}
      </div>
    </div>
  );
}

export default ItemMenu;
