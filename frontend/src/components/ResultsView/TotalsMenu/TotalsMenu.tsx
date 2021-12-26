import { connect, RootStateOrAny } from "react-redux";
import "./TotalsMenu.css";

function TotalsMenu({
  eventTotal,
  eventTipTaxTotal,
}: {
  eventTotal: number;
  eventTipTaxTotal: number;
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
            <span>${eventTipTaxTotal}</span>
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
    eventTipTaxTotal: state.calculation.eventTipTaxTotal,
  };
};

export default connect(mapStateToProps)(TotalsMenu);
