import { useDispatch, useSelector } from "react-redux";
import { AppStore, Person } from "../../../models/custom-models";
import SharingRow from "../SharingRow/SharingRow";
import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";
import { useState, useEffect } from "react";
import { editEventTitle } from "../../../redux/calculation/calculation-actions";
import EventActions from "../EventActions/EventActions";

function ItemMenu() {
  const dispatch = useDispatch();

  // Store Selectors
  const storeEventTitle = useSelector(
    (state: AppStore) => state.calculation.eventTitle
  );

  const personIds = useSelector((state: AppStore) => {
    return state.calculation.persons.map((person: Person) => person.id);
  });

  const storeUiEditTitle = useSelector(
    (state: AppStore) => state.ui.uiEditEventTitle
  );

  const [eventTitleInput, setEventTitleInput] = useState(storeEventTitle);

  const eventTitleInputHandler = (e: any) => {
    setEventTitleInput(e.target.value);
    dispatch(editEventTitle(e.target.value));
  };

  useEffect(() => {
    setEventTitleInput(storeEventTitle);
  }, [storeEventTitle]);

  return (
    <div className="itemView">
      <div className="itemMenu">
        <div className="itemHeaderWrapper">
          {!storeUiEditTitle ? (
            <h1 className="itemHeader">{eventTitleInput}</h1>
          ) : (
            <input
              type="text"
              onChange={eventTitleInputHandler}
              value={eventTitleInput || ""}
            />
          )}
          <div className="itemHeaderActions">
            <EventActions />
            <SharingRow />
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
