import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { didMount } from "../../../hooks/didMount";
import { AppStore } from "../../../models/custom-models";
import {
  editEventTotal,
  recalculateEvent,
} from "../../../redux/calculation/calculation-actions";
import { uiEditEventTotal } from "../../../redux/ui/ui-actions";
import CloseBtn from "../../shared/buttons/CloseBtn";
import EditBtn from "../../shared/buttons/EditBtn";
import "./TotalsMenu.css";

function TotalsMenu() {
  const didMountOnce = didMount();
  const dispatch = useDispatch();

  const storeEventTotal = useSelector(
    (state: AppStore) => state.calculation.eventTotal
  );

  const storeEventTipTaxTotal = useSelector(
    (state: AppStore) => state.calculation.eventTipTaxTotal
  );

  const storeUiEditEventTotal = useSelector(
    (state: AppStore) => state.ui.uiEditEventTotal
  );

  const [eventTotalInput, setEventTotalInput] = useState(storeEventTotal);

  const eventTotalInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEventTotalInput(e.target.value);
  };

  useEffect(() => {
    setEventTotalInput(storeEventTotal);
  }, [storeEventTotal]);

  useEffect(() => {
    if (!didMountOnce && !storeUiEditEventTotal) {
      dispatch(editEventTotal(eventTotalInput));
      dispatch(recalculateEvent());
    }
  }, [storeUiEditEventTotal]);

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
            clickSideEffect={() => dispatch(uiEditEventTotal(true))}
            ariaTitle={"Edit event total"}
          />
        ) : (
          <CloseBtn
            clickSideEffect={() => dispatch(uiEditEventTotal(false))}
            ariaTitle={"Stop editing event total"}
          />
        )}
      </div>
    </div>
  );
}

export default TotalsMenu;
