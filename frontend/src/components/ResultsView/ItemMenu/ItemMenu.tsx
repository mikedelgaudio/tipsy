import { connect, RootStateOrAny } from "react-redux";
import { Item, Person } from "../../../models/custom-models";
import SharingRow from "../SharingRow/SharingRow";
import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";
import { useState, useEffect } from "react";
import { editEventTitle } from "../../../redux/calculation/calculation-actions";
import ResultsActions from "../ResultsActions/ResultsActions";

function ItemMenu({
  storeEventTitle,
  storePersons,
  storeItems,
  dispatchEditEventTitle,
  storeUiEditTitle,
}: any) {
  const [eventTitleInput, setEventTitleInput] = useState(storeEventTitle);

  const eventTitleInputHandler = (e: any) => {
    setEventTitleInput(e.target.value);
    dispatchEditEventTitle(e.target.value);
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
            <ResultsActions />
            <SharingRow />
          </div>
        </div>
        {storePersons.map((person: Person) => {
          const data = storeItems.filter(
            (item: Item) => person?.id === item.personId
          );
          return (
            <PersonCard key={person.id} personData={person} itemsData={data} />
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    storeEventTitle: state.calculation.eventTitle,
    storePersons: state.calculation.persons,
    storeItems: state.calculation.items,
    storeUiEditTitle: state.ui.uiEditEventTitle,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchEditEventTitle: (title: string) => dispatch(editEventTitle(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemMenu);
