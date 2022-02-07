import { connect, RootStateOrAny } from "react-redux";
import { Item, Person } from "../../../models/custom-models";
import SharingRow from "../SharingRow/SharingRow";
import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";
import { useState, useEffect } from "react";
import { editEventTitle } from "../../../redux/calculation/calculation-actions";

function ItemMenu({
  eventTitle,
  persons,
  items,
  editEventTitle,
  uiEditTitle,
}: any) {
  const [eventTitleInput, setEventTitleInput] = useState(eventTitle);

  const eventTitleInputHandler = (e: any) => {
    setEventTitleInput(e.target.value);
    editEventTitle(e.target.value);
  };

  useEffect(() => {
    setEventTitleInput(eventTitle);
  }, [eventTitle]);

  return (
    <div className="itemView">
      <div className="itemMenu">
        <div className="itemHeaderWrapper">
          {!uiEditTitle ? (
            <h1 className="itemHeader">{eventTitleInput}</h1>
          ) : (
            <input
              type="text"
              onChange={eventTitleInputHandler}
              value={eventTitleInput || ""}
            />
          )}
          <div className="itemHeaderActions">
            <SharingRow />
          </div>
        </div>
        {persons.map((person: Person) => {
          console.log(person);
          const itemsData = items.filter(
            (item: Item) => person.id === item.personId
          );
          return (
            <PersonCard
              key={person.id}
              personData={person}
              itemsData={itemsData}
            />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    eventTitle: state.calculation.eventTitle,
    persons: state.calculation.persons,
    items: state.calculation.items,
    uiEditTitle: state.ui.uiEditEventTitle,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    editEventTitle: (title: string) => dispatch(editEventTitle(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemMenu);
