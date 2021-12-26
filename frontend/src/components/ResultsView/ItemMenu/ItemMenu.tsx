import { connect, RootStateOrAny } from "react-redux";
import SharingRow from "../SharingRow/SharingRow";
import "./ItemMenu.css";
import PersonCard from "./PersonCard/PersonCard";

function ItemMenu({ eventTitle }: { eventTitle: string }) {
  return (
    <div className="itemView">
      <div className="itemMenu">
        <div className="itemHeaderWrapper">
          <h1 className="itemHeader">{eventTitle}</h1>
          <div className="itemHeaderActions">
            <SharingRow />
          </div>
        </div>

        <PersonCard />
        <PersonCard />
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    eventTitle: state.calculation.eventTitle,
  };
};

export default connect(mapStateToProps)(ItemMenu);
