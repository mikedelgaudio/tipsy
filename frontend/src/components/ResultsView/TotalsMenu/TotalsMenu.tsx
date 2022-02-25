import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { didMount } from "../../../hooks/didMount";
import { AppStore, SanitizedCurrency } from "../../../models/custom-models";
import {
  editEventTotal,
  recalculateEvent,
} from "../../../redux/calculation/calculation-actions";
import { uiEditEventTotal } from "../../../redux/ui/ui-actions";
import {
  removeDollarOrComma,
  sanitizeCurrency,
} from "../../../utilities/sanitize";
import CloseBtn from "../../shared/buttons/CloseBtn";
import EditBtn from "../../shared/buttons/EditBtn";
import { dismissToast, errorToast } from "../../shared/toasts/toast";
import "./TotalsMenu.css";

const defaultEventTotals: { eventTotal: string; eventTotalFloat: number } = {
  eventTotal: "0.00",
  eventTotalFloat: 0.0,
};

function TotalsMenu() {
  const didMountOnce = didMount();
  const dispatch = useDispatch();

  const storeEventTotal = useSelector(
    (state: AppStore) => state.calculation.eventTotal
  );

  const storeEventTotalFloat = useSelector(
    (state: AppStore) => state.calculation.eventTotalFloat
  );

  const storeEventTipTaxTotal = useSelector(
    (state: AppStore) => state.calculation.eventTipTaxTotal
  );

  const storeUiEditEventTotal = useSelector(
    (state: AppStore) => state.ui.uiEditEventTotal
  );

  const [toastId, setToastId] = useState(useRef(null));
  const [eventTotalInput, setEventTotalInput] = useState(defaultEventTotals);
  const [error, setError] = useState(false);

  const eventTotalInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = removeDollarOrComma(e.target.value);
    const parsedPriceFloat: SanitizedCurrency = sanitizeCurrency(input);

    if (parsedPriceFloat.error) {
      setError(true);
    } else {
      setError(false);
    }

    setEventTotalInput({
      ...eventTotalInput,
      eventTotal: e.target.value,
      eventTotalFloat: parsedPriceFloat.parsed,
    });
  };

  useEffect(() => {
    setEventTotalInput({
      eventTotal: storeEventTotal || defaultEventTotals.eventTotal,
      eventTotalFloat:
        storeEventTotalFloat || defaultEventTotals.eventTotalFloat,
    });
  }, [storeEventTotal]);

  useEffect(() => {
    dismissToast(toastId);
    if (error && !storeUiEditEventTotal) {
      setToastId(
        errorToast(
          toastId,
          "Invalid total price formatting. For example, only provide prices such as: 10.99"
        )
      );
    }

    if (!didMountOnce && !storeUiEditEventTotal && !error) {
      dispatch(
        editEventTotal(
          removeDollarOrComma(eventTotalInput.eventTotal),
          eventTotalInput.eventTotalFloat
        )
      );
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
            value={eventTotalInput.eventTotal || ""}
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
