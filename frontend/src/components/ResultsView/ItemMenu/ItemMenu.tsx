import { connect, RootStateOrAny } from "react-redux";
import { Item, Person } from "../../../models/custom-models";
import SharingRow from "../SharingRow/SharingRow";
import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";

function ItemMenu({
  eventTitle,
  persons,
  items,
}: {
  eventTitle: string;
  persons: [];
  items: [];
}) {
  return (
    <div className="itemView">
      <div className="itemMenu">
        <div className="itemHeaderWrapper">
          <h1 className="itemHeader">{eventTitle}</h1>
          <div className="itemHeaderActions">
            <SharingRow />
          </div>
        </div>
        {persons.map((person: Person) => {
          const itemsData = items.filter(
            (item: Item) => person.id === item.personId
          );
          return <PersonCard personData={person} itemsData={itemsData} />;
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
  };
};

export default connect(mapStateToProps)(ItemMenu);
