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
  deleteItem,
} from "../../../../../redux/calculation/calculation-actions";
import {
  removeDollarOrComma,
  sanitizeCurrency,
} from "../../../../../utilities/sanitize";
import {
  ERROR_INPUT_NAME,
  ERROR_INPUT_PRICE,
} from "../../../../../utilities/variables";
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
  });

  // Dispatchers
  const dispatchDeleteItem = () => {
    dispatch(deleteItem(itemId));
  };

  const [itemInput, setItemsInput] = useState(defaultItem);
  const [error, setError] = useState({ name: false, price: false });
  const toastIdName = useRef(null);
  const toastIdPrice = useRef(null);

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
          setError({ ...error, price: true });
          // If state had a valid float before, utilize the cached value instead.
          parsedPriceFloat.parsed = itemInput.priceFloat;
        } else {
          setError({ ...error, price: false });
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

  useEffect(() => {
    if (!didMountOnce && !editing) {
      // Check if price or name changed
      error.name
        ? errorToast(toastIdName, ERROR_INPUT_NAME(itemInput?.name))
        : dismissToast(toastIdName);

      error.price
        ? errorToast(toastIdPrice, ERROR_INPUT_PRICE(itemInput?.name))
        : dismissToast(toastIdPrice);

      if (storeItemData?.price !== itemInput.price) {
        dispatch(
          editItemPrice(
            itemId,
            !error.price
              ? removeDollarOrComma(itemInput.price)
              : itemInput.price,
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
      dismissToast(toastIdName);
      dismissToast(toastIdPrice);
    };
  }, []);

  return (
    <li className={`personItem ${editing ? "editing" : ""} `} key={itemId}>
      <div className="personItemInfoRow">
        {!editing ? (
          <>
            <p className={`${error.name ? "errorText" : ""} personItemName`}>
              {storeItemData?.name}
            </p>
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
          <p className={`${error.price ? "errorText" : ""} personItemPrice`}>
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
          clickSideEffect={dispatchDeleteItem}
          ariaTitle={`Delete ${storeItemData?.name}`}
        />
      </div>
    </li>
  );
}

export default ItemRow;
