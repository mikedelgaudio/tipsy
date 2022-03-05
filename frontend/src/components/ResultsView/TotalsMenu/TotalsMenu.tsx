import { ChangeEvent, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { didClickAway } from "../../../hooks/didClickAway";
import { didMount } from "../../../hooks/didMount";
import { AppStore, SanitizedCurrency } from "../../../models/custom-models";
import {
  editEventTotal,
  recalculateEvent,
} from "../../../redux/calculation/calculation-actions";
import {
  removeDollarOrComma,
  sanitizeCurrency,
} from "../../../utilities/sanitize";
import CloseBtn from "../../shared/buttons/CloseBtn";
import EditBtn from "../../shared/buttons/EditBtn";
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
    shallowEqual,
  );

  const storeEventTotalFloat = useSelector(
    (state: AppStore) => state.calculation.eventTotalFloat,
    shallowEqual,
  );

  const storeEventTipTaxTotal = useSelector(
    (state: AppStore) => state.calculation.eventTipTaxTotal,
    shallowEqual,
  );

  const [editing, setEditing] = useState(false);
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
    if (!didMountOnce && !editing && !error) {
      dispatch(
        editEventTotal(
          removeDollarOrComma(eventTotalInput.eventTotal),
          eventTotalInput.eventTotalFloat,
        ),
      );
      dispatch(recalculateEvent());
    }
  }, [editing]);

  const menuRef = useRef(null);
  didClickAway(menuRef, editing, setEditing);

  return (
    <div className="totalsMenuView" ref={menuRef}>
      <div className="totalsBreakdownWrapper">
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <p className="totalBreakdownDesc">Total Tip and Tax</p>
          </li>
        </ul>
        <ul className="totalsBreakdownList">
          <li className="totalBreakdownItem">
            <p>${storeEventTipTaxTotal}</p>
          </li>
        </ul>
      </div>
      <div className="totalRow">
        <h3 className="totalText">Total</h3>
        <div className="totalInputWrapper">
          {!editing ? (
            <h3 className={`${error ? "errorText" : ""} totalText `}>
              ${storeEventTotal}
            </h3>
          ) : (
            <input
              type="text"
              onChange={eventTotalInputHandler}
              value={eventTotalInput.eventTotal || ""}
            />
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
