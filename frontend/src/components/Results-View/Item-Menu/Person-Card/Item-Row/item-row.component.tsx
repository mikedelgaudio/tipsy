import { observer } from "mobx-react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { didMount } from "../../../../../hooks";
import { Item } from "../../../../../models";
import { ItemMobx } from "../../../../../models/item.model";
import { StoreContext } from "../../../../../store.context";
import { DeleteBtn } from "../../../../shared/buttons";

const defaultItem: Item = {
  id: "",
  personId: "",
  name: "",
  qty: 1,
  price: "0.00",
  priceFloat: 0.0,
};

// const defaultErrorState = { name: false, price: false };

const ItemRow = observer(({ itemId, editing }: any) => {
  const { calculationStore } = useContext(StoreContext);

  // const dispatch = useDispatch();
  const didMountOnce = didMount();

  // Store Selectors
  // const storeItemData = useSelector((state: AppStore) => {
  //   return state.calculation.items.find((item: Item) => item.id === itemId);
  // });

  // const storeItemIndex = useSelector((state: AppStore) => {
  //   return (
  //     state.calculation.items.findIndex((item: Item) => item.id === itemId) + 1
  //   );
  // });

  // const storeEventId = useSelector((state: AppStore) => {
  //   return state.calculation.eventId;
  // });

  const storeItemData = calculationStore.items.find(
    (item: ItemMobx) => item.id === itemId,
  );

  const storeItemIndex =
    calculationStore.items.findIndex((item: ItemMobx) => item.id === itemId) +
    1;

  // Dispatchers
  const dispatchDeleteItem = () => {
    // dispatch(deleteItem(itemId));
    calculationStore.deleteItem(itemId);
  };

  const [itemInput, setItemsInput] = useState(defaultItem);
  // const [error, setError] = useState(defaultErrorState);
  // const toastIdName = useRef(null);
  // const toastIdPrice = useRef(null);

  const itemInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const attributeIndex = 2;
    const fieldName = e.target.attributes[attributeIndex].textContent;
    switch (fieldName) {
      case "NAME": {
        // setError({ ...error, name: !validString(e.target.value) });
        setItemsInput({
          ...itemInput,
          name: e.target.value,
        });
        break;
      }
      case "PRICE": {
        // const input = removeDollarOrComma(e.target.value);
        // const parsedPriceFloat: SanitizedCurrency = sanitizeCurrency(input);

        // if (parsedPriceFloat.error) {
        //   // setError({ ...error, price: true });
        //   // If state had a valid float before, utilize the cached value instead.
        //   parsedPriceFloat.parsedFloat = itemInput.priceFloat;
        // } else {
        //   // TODO: To reduce calls in the future, maybe set flag to avoid?
        //   // setError({ ...error, price: false });
        // }

        setItemsInput({
          ...itemInput,
          price: e.target.value,
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
      // error.name
      //   ? errorToast(toastIdName, ERROR_INPUT_NAME(storeItemData?.name))
      //   : dismissToast(toastIdName);

      // error.price
      //   ? errorToast(toastIdPrice, ERROR_INPUT_PRICE(storeItemData?.name))
      //   : dismissToast(toastIdPrice);

      if (storeItemData?.price !== itemInput.price) {
        // dispatch(
        //   editItemPrice(
        //     itemId,
        //     !error.price
        //       ? removeDollarOrComma(itemInput.price)
        //       : itemInput.price,
        //     itemInput.priceFloat,
        //   ),
        calculationStore.editItemPrice(itemId, itemInput.price);

        // );
      }

      if (storeItemData?.name !== itemInput.name) {
        // dispatch(
        //   editItemName(
        //     itemId,
        //     !error.name ? itemInput.name.trim() : storeItemData?.name,
        //   ),
        // );
        calculationStore.editItemName(itemId, itemInput.name);
      }
    }
  }, [editing]);

  // TODO:
  // ! Component Destroyed
  // useEffect(() => {
  //   return () => {
  //     dismissToast(toastIdName);
  //     dismissToast(toastIdPrice);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (!didMountOnce) setError(defaultErrorState);
  // }, [storeEventId]);

  return (
    <li className={`personItem ${editing ? "editing" : ""} `} key={itemId}>
      <div className="personItemInfoRow">
        {!editing ? (
          <>
            <p
              className={`${
                storeItemData?.errorName ? "errorText" : ""
              } personItemName`}
              data-cy={`${storeItemData?.name}-itemName`}
            >
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
          <p
            className={`${
              storeItemData?.errorPrice ? "errorText" : ""
            } personItemPrice`}
            data-cy={`${storeItemData?.name}-itemPrice`}
          >
            ${storeItemData?.price}
          </p>
        ) : (
          <div className="inputWrapper">
            <label htmlFor={`itemPriceInput-${itemId}`}>
              Item {storeItemIndex} Price
            </label>
            <input
              id={`itemPriceInput-${itemId}`}
              type="number"
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
});

export { ItemRow };
