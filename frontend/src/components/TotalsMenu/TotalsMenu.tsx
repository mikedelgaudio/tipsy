import "./TotalsMenu.css";

function TotalsMenu() {
  return (
    <div className="totalsMenuView">
      <div className="totalRow">
        <h1 className="totalText">Totals</h1>
        <h1 className="totalText">$1031.21</h1>
      </div>

      <div className="totalsBreakdownWrapper">
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <span className="totalBreakdownDesc">Before Tip and Tax</span>
          </li>
          <li className="totalBreakdownItem">
            <span className="totalBreakdownDesc">Tip and Tax %</span>
          </li>
          <li className="totalBreakdownItem">
            <span className="totalBreakdownDesc">Tip and Tax $</span>
          </li>
          <li className="totalBreakdownItem">
            <span className="totalBreakdownDesc">Final</span>
          </li>
        </ul>
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <span>$100.50</span>
          </li>
          <li className="totalBreakdownItem">
            <span>20%</span>
          </li>
          <li className="totalBreakdownItem">
            <span>$12</span>
          </li>
          <li className="totalBreakdownItem">
            <span>$1086.99</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TotalsMenu;
