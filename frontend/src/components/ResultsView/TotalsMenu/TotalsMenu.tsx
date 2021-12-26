import { connect, RootStateOrAny } from "react-redux";
import "./TotalsMenu.css";

function TotalsMenu({
  eventTotal,
  eventTipTotal,
}: {
  eventTotal: number;
  eventTipTotal: number;
}) {
  return (
    <div className="totalsMenuView">
      <div className="totalsBreakdownWrapper">
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <span className="totalBreakdownDesc">Total Tip and Tax</span>
          </li>
        </ul>
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <span>${eventTipTotal}</span>
          </li>
        </ul>
      </div>
      <div className="totalRow">
        <h3 className="totalText">Total</h3>
        <h3 className="totalText">${eventTotal}</h3>
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    eventTotal: state.calculation.eventTotal,
    eventTipTotal: state.calculation.eventTipTotal,
  };
};

export default connect(mapStateToProps)(TotalsMenu);
