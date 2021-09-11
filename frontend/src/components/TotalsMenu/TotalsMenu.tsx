import "./TotalsMenu.css";

function TotalsMenu() {
  return (
    <div className="totalsMenuView">
      <div className="totalRow">
        <h1 className="totalText">Total</h1>
        <h1 className="totalText">$1031.21</h1>
      </div>

      <div className="totalsBreakdownWrapper">
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <span className="totalBreakdownDesc">Tip and Tax</span>
          </li>
          <li className="totalBreakdownItem">
            <span className="totalBreakdownDesc">Final</span>
          </li>
        </ul>
        <ul className="totalsBreakdownList">
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
