import "./TotalsMenu.css";

function TotalsMenu() {
  return (
    <div className="totalsMenuView">
      <div className="totalRow">
        <h1>Totals</h1>
        <h1>$131.21</h1>
      </div>

      <div className="totalsBreakdownWrapper">
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <span>Before Tip and Tax</span>
          </li>
          <li className="totalBreakdownItem">
            <span>Tip and Tax %</span>
          </li>
          <li className="totalBreakdownItem">
            <span>Tip and Tax $</span>
          </li>
          <li className="totalBreakdownItem">
            <span>Final</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TotalsMenu;
