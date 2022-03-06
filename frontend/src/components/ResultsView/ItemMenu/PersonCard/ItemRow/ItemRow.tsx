import { ChangeEvent, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { didMount } from "../../../../../hooks/didMount";
import {
  AppStore,
  Item,
  SanitizedCurrency,
} from "../../../../../models/custom-models";
import {
  editItemName,
  editItemPrice,
  removeItem,
} from "../../../../../redux/calculation/calculation-actions";
import {
  removeDollarOrComma,
  sanitizeCurrency,
} from "../../../../../utilities/sanitize";
import DeleteBtn from "../../../../shared/buttons/DeleteBtn";
import { dismissToast, errorToast } from "../../../../shared/toasts/toasts";

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

  const storeItemIndex = useSelector((state: AppStore) => {
    return (
      state.calculation.items.findIndex((item: Item) => item.id === itemId) + 1
    );
  }, shallowEqual);

  // Dispatchers
  const dispatchRemoveItem = () => {
    dispatch(removeItem(itemId));
  };

  const [itemInput, setItemsInput] = useState(defaultItem);
  const [error, setError] = useState(false);

  const itemInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const attributeIndex = 2;
    const fieldName = e.target.attributes[attributeIndex].textContent;
    switch (fieldName) {
      case "NAME": {
        setItemsInput({
          ...itemInput,
          name: e.target.value,
        });
        break;
      }
      case "PRICE": {
        const input = removeDollarOrComma(e.target.value);
        const parsedPriceFloat: SanitizedCurrency = sanitizeCurrency(input);

        if (parsedPriceFloat.error) {
          setError(true);
          // If state had a valid float before, utilize the cached value instead.
          //parsedPriceFloat.parsed = itemInput.priceFloat;
        } else {
          setError(false);
        }

        setItemsInput({
          ...itemInput,
          price: e.target.value,
          priceFloat: parsedPriceFloat.parsed,
        });
        break;
      }
      default: {
        break;
      }
    }
  };

  useEffect(() => {
    setItemsInput(storeItemData || defaultItem);
  }, [storeItemData]);

  const toastId = useRef(null);

  useEffect(() => {
    if (!didMountOnce && !editing) {
      // Check if price or name changed
      error
        ? errorToast(
            toastId,
            `Invalid price formatting for "${itemInput?.name}". Format prices such as: 10.99`,
          )
        : dismissToast(toastId);

      if (!error && storeItemData?.price !== itemInput.price) {
        dispatch(
          editItemPrice(
            itemId,
            removeDollarOrComma(itemInput.price),
            itemInput.priceFloat,
          ),
        );
      }

      if (storeItemData?.name !== itemInput.name) {
        dispatch(editItemName(itemId, itemInput.name));
      }
    }
  }, [editing]);

  // Component Destroyed
  useEffect(() => {
    return () => {
      dismissToast(toastId);
    };
  }, []);

  return (
    <li className={`personItem ${editing ? "editing" : ""} `} key={itemId}>
      <div className="personItemInfoRow">
        {!editing ? (
          <>
            <p className="personItemName">{storeItemData?.name}</p>
          </>
        ) : (
          <>
            <div className="personItemDetailsContainer">
              <div className="inputWrapper">
                <label htmlFor={`itemNameInput-${itemId}`}>
                  Item {storeItemIndex} Name
                </label>
                <input
                  id={`itemNameInput-${itemId}`}
                  type="text"
                  field-name="NAME"
                  onChange={itemInputHandler}
                  value={itemInput.name || ""}
                />
              </div>
            </div>
          </>
        )}
        {!editing ? (
          <p className={`${error ? "errorText" : ""} personItemPrice `}>
            ${storeItemData?.price}
          </p>
        ) : (
          <div className="inputWrapper">
            <label htmlFor={`itemPriceInput-${itemId}`}>
              Item {storeItemIndex} Price
            </label>
            <input
              id={`itemPriceInput-${itemId}`}
              type="text"
              field-name="PRICE"
              onChange={itemInputHandler}
              value={itemInput.price || ""}
            />
          </div>
        )}
      </div>
      <div className="personItemDetailsContainer">
        <DeleteBtn
          clickSideEffect={dispatchRemoveItem}
          ariaTitle={`Delete ${storeItemData?.name}`}
        />
      </div>
    </li>
  );
}

export default ItemRow;
