import { ChangeEvent, useEffect, useState } from "react";
import { connect, RootStateOrAny } from "react-redux";
import { didMount } from "../../../hooks/didMount";
import {
  editEventTotal,
  recalculateEvent,
} from "../../../redux/calculation/calculation-actions";
import { uiEditEventTotal } from "../../../redux/ui/ui-actions";
import CloseBtn from "../../shared/buttons/CloseBtn";
import EditBtn from "../../shared/buttons/EditBtn";
import "./TotalsMenu.css";

function TotalsMenu({
  storeEventTotal,
  storeEventTipTaxTotal,
  storeUiEditEventTotal,
  dispatchUiEditEventTotal,
  dispatchEditEventTotal,
  dispatchRecalculate,
}: any) {
  const didMountOnce = didMount();

  useEffect(() => {
    if (!didMountOnce && !storeUiEditEventTotal) {
      dispatchRecalculate();
    }
  }, [storeUiEditEventTotal]);

  const [eventTotalInput, setEventTotalInput] = useState(storeEventTotal);

  const eventTotalInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEventTotalInput(e.target.value);
    dispatchEditEventTotal(e.target.value);
  };

  useEffect(() => {
    setEventTotalInput(storeEventTotal);
  }, [storeEventTotal]);

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
            <span>${storeEventTipTaxTotal}</span>
          </li>
        </ul>
      </div>
      <div className="totalRow">
        <h3 className="totalText">Total</h3>
        {!storeUiEditEventTotal ? (
          <h3 className="totalText">${storeEventTotal}</h3>
        ) : (
          <input
            type="text"
            onChange={eventTotalInputHandler}
            value={eventTotalInput || ""}
          />
        )}
        {!storeUiEditEventTotal ? (
          <EditBtn
            clickSideEffect={dispatchUiEditEventTotal}
            ariaTitle={"Edit event total"}
          />
        ) : (
          <CloseBtn
            clickSideEffect={dispatchUiEditEventTotal}
            ariaTitle={"Stop editing event total"}
          />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state: RootStateOrAny) => {
  return {
    storeEventTotal: state.calculation.eventTotal,
    storeEventTipTaxTotal: state.calculation.eventTipTaxTotal,
    storeUiEditEventTotal: state.ui.uiEditEventTotal,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchUiEditEventTotal: (enabled: boolean) =>
      dispatch(uiEditEventTotal(enabled)),
    dispatchEditEventTotal: (newTotal: string) =>
      dispatch(editEventTotal(newTotal)),
    dispatchRecalculate: () => dispatch(recalculateEvent()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TotalsMenu);
