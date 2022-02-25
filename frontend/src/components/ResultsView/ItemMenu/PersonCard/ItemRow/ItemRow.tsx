import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { didMount } from "../../../../../hooks/didMount";
import {
  AppStore,
  Item,
  SanitizedCurrency,
} from "../../../../../models/custom-models";
import {
  editItemName,
  editItemPrice,
  recalculateEvent,
  removeItem,
} from "../../../../../redux/calculation/calculation-actions";
import {
  removeDollarOrComma,
  sanitizeCurrency,
} from "../../../../../utilities/sanitize";
import DeleteBtn from "../../../../shared/buttons/DeleteBtn";
import { dismissToast, errorToast } from "../../../../shared/toasts/toast";

const defaultItem: Item = {
  id: "",
  personId: "",
  name: "",
  qty: 1,
  price: "0.00",
  priceFloat: 0.0,
};

function ItemRow({ itemId, editing }: any) {
  const dispatch = useDispatch();
  const didMountOnce = didMount();

  // Store Selectors
  const storeItemData = useSelector((state: AppStore) => {
    return state.calculation.items.find((item: Item) => item.id === itemId);
  });

  // Dispatchers
  const dispatchRemoveItem = () => {
    dispatch(removeItem(itemId));
    dispatch(recalculateEvent());
  };

  const [toastId, setToastId] = useState(useRef(null));
  const [itemInput, setItemsInput] = useState(defaultItem);
  const [error, setError] = useState(false);

  const itemInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const attributeIndex = 1;
    const fieldName = e.target.attributes[attributeIndex].textContent;
    switch (fieldName) {
      case "NAME":
        setItemsInput({
          ...itemInput,
          name: e.target.value,
        });
        break;
      case "PRICE":
        const input = removeDollarOrComma(e.target.value);
        const parsedPriceFloat: SanitizedCurrency = sanitizeCurrency(input);

        if (parsedPriceFloat.error) {
          setError(true);
        } else {
          setError(false);
        }

        setItemsInput({
          ...itemInput,
          price: e.target.value,
          priceFloat: parsedPriceFloat.parsed,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setItemsInput(storeItemData || defaultItem);
  }, [storeItemData]);

  useEffect(() => {
    // highlight item in red?
    dismissToast(toastId);
    if (error && !editing) {
      setToastId(
        errorToast(
          toastId,
          `Invalid price formatting for ${itemInput?.name}. Format prices such as: 10.99`
        )
      );
    }

    if (!didMountOnce && !editing) {
      // Check if price or name changed
      // bad smell?
      if (!error && storeItemData?.price !== itemInput.price) {
        dispatch(
          editItemPrice(
            itemId,
            removeDollarOrComma(itemInput.price),
            itemInput.priceFloat
          )
        );
        dispatch(recalculateEvent());
      }

      if (storeItemData?.name !== itemInput.name) {
        dispatch(editItemName(itemId, itemInput.name));
        dispatch(recalculateEvent());
      }
    }
  }, [editing]);

  return (
    <li className="personItem" key={itemId}>
      <div className="personItemInfoRow">
        {!editing ? (
          <>
            <div className="personItemDetailsContainer">
              <span className="personItemName">{storeItemData?.name}</span>
            </div>
            <span className="personItemPrice">${storeItemData?.price}</span>
          </>
        ) : (
          <>
            <div className="personItemDetailsContainer">
              <input
                type="text"
                field-name="NAME"
                onChange={itemInputHandler}
                value={itemInput.name || ""}
              />
            </div>

            <input
              type="text"
              field-name="PRICE"
              onChange={itemInputHandler}
              value={itemInput.price || ""}
            />
          </>
        )}
        <div className="personItemOptionRow">
          {/* <button>Split?</button> */}
          <DeleteBtn
            clickSideEffect={dispatchRemoveItem}
            ariaTitle={`Delete ${storeItemData?.name}`}
          />
        </div>
      </div>
    </li>
  );
}

export default ItemRow;
