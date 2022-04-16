import { observer } from "mobx-react";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { didClickAway, didMount } from "../../../../hooks";
import { StoreContext } from "../../../../store.context";
import { CloseBtn, EditBtn } from "../../../shared/buttons";
import "./totals-menu.component.css";

const TotalsMenu = observer(() => {
  const { calculationStore } = useContext(StoreContext);
  const didMountOnce = didMount();

  const [editing, setEditing] = useState(false);
  const [eventTotalInput, setEventTotalInput] = useState("0.00");

  const eventTotalInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEventTotalInput(e.target.value);
  };

  useEffect(() => {
    setEventTotalInput(calculationStore.eventTotal || "0.00");
  }, [calculationStore.eventTotal]);

  useEffect(() => {
    if (!didMountOnce && !editing) {
      if (calculationStore.eventTotal !== eventTotalInput) {
        calculationStore.editEventTotal(eventTotalInput);
        // if (!error) dispatch(recalculateEvent());
      }
    }
  }, [editing]);

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
            <p data-cy="eventTotalTipAndTax">
              ${calculationStore.eventTipTaxTotal}
            </p>
          </li>
        </ul>
      </div>
      <div className="totalRow">
        <h3 className="totalText">Total</h3>
        <div className="totalInputWrapper">
          {!editing ? (
            <h3
              className={`${
                calculationStore.event.errorPrice ? "errorText" : ""
              } totalText `}
              data-cy="eventTotal"
            >
              ${calculationStore.eventTotal}
            </h3>
          ) : (
            <div className="inputWrapper">
              <label htmlFor={"eventTotalInput"}>Event total price</label>
              <input
                id="eventTotalInput"
                type="number"
                onChange={eventTotalInputHandler}
                value={eventTotalInput || ""}
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
});

export { TotalsMenu };
