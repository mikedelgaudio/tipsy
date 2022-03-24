import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { didClickAway } from "../../../../hooks/didClickAway";
import { didMount } from "../../../../hooks/didMount";
import { AppStore, SanitizedCurrency } from "../../../../models/custom-models";
import {
  editEventTotal,
  recalculateEvent,
} from "../../../../redux/calculation/calculation-actions";
import {
  removeDollarOrComma,
  sanitizeCurrency,
} from "../../../../utilities/sanitize";
import { ERROR_INPUT_PRICE } from "../../../../utilities/variables";
import CloseBtn from "../../../shared/buttons/CloseBtn";
import EditBtn from "../../../shared/buttons/EditBtn";
import { dismissToast, errorToast } from "../../../shared/toasts/toasts";
import "./TotalsMenu.css";

const defaultEventTotals: { eventTotal: string; eventTotalFloat: number } = {
  eventTotal: "0.00",
  eventTotalFloat: 0.0,
};

function TotalsMenu() {
  const didMountOnce = didMount();
  const dispatch = useDispatch();

  const storeEventTotal = useSelector(
    (state: AppStore) => state.calculation.eventTotal,
  );

  const storeEventTotalFloat = useSelector(
    (state: AppStore) => state.calculation.eventTotalFloat,
  );

  const storeEventTipTaxTotal = useSelector(
    (state: AppStore) => state.calculation.eventTipTaxTotal,
  );

  const [editing, setEditing] = useState(false);
  const [eventTotalInput, setEventTotalInput] = useState(defaultEventTotals);
  const [error, setError] = useState(false);
  const toastId = useRef(null);

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
    if (!didMountOnce && !editing) {
      error
        ? errorToast(toastId, ERROR_INPUT_PRICE("Event total"))
        : dismissToast(toastId);

      if (storeEventTotal !== eventTotalInput.eventTotal) {
        dispatch(
          editEventTotal(
            removeDollarOrComma(eventTotalInput.eventTotal),
            eventTotalInput.eventTotalFloat,
          ),
        );
        if (!error) dispatch(recalculateEvent());
      }
    }
  }, [editing]);

  const storeEventId = useSelector((state: AppStore) => {
    return state.calculation.eventId;
  });

  useEffect(() => {
    if (!didMountOnce) setError(false);
  }, [storeEventId]);

  const menuRef = useRef(null);
  didClickAway(menuRef, editing, setEditing);

  return (
    <div className="totalsMenuView" ref={menuRef}>
      <div className="totalsBreakdownWrapper">
        {/* TODO: Remove unused <ul></ul> */}
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <p className="totalBreakdownDesc">Total Tip and Tax</p>
          </li>
        </ul>
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <p data-cy="eventTotalTipAndTax">${storeEventTipTaxTotal}</p>
          </li>
        </ul>
      </div>
      <div className="totalRow">
        <h3 className="totalText">Total</h3>
        <div className="totalInputWrapper">
          {!editing ? (
            <h3
              className={`${error ? "errorText" : ""} totalText `}
              data-cy="eventTotal"
            >
              ${storeEventTotal}
            </h3>
          ) : (
            <div className="inputWrapper">
              <label htmlFor={"eventTotalInput"}>Event total price</label>
              <input
                id="eventTotalInput"
                type="number"
                onChange={eventTotalInputHandler}
                value={eventTotalInput.eventTotal || ""}
              />
            </div>
          )}
          {!editing ? (
            <EditBtn
              clickSideEffect={() => setEditing(true)}
              ariaTitle={"Edit event total"}
              className="btn-light"
            />
          ) : (
            <CloseBtn
              clickSideEffect={() => setEditing(false)}
              ariaTitle={"Stop editing event total"}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default TotalsMenu;
