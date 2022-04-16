import { observer } from "mobx-react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { didMount } from "../../../../../hooks";
import { ItemMobx } from "../../../../../models/item.model";
import { StoreContext } from "../../../../../store.context";
import { DeleteBtn } from "../../../../shared/buttons";

const defaultItem: ItemMobx = {
  id: "",
  personId: "",
  name: "",
  price: "0.00",
  priceFloat: 0.0,
  errorName: false,
  errorPrice: false,
};

const ItemRow = observer(({ itemId, editing }: any) => {
  const { calculationStore } = useContext(StoreContext);
  const didMountOnce = didMount();

  const storeItemIndex =
    calculationStore.items.findIndex((item: ItemMobx) => item.id === itemId) +
    1;

  const storeItemData =
    storeItemIndex !== -1 ? calculationStore.items[storeItemIndex - 1] : null;

  // Dispatchers
  const dispatchDeleteItem = () => {
    calculationStore.deleteItem(itemId);
  };

  const [itemInput, setItemsInput] = useState(defaultItem);

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
    if (storeItemData) setItemsInput(storeItemData);
  }, [storeItemData]);

  useEffect(() => {
    if (!didMountOnce && !editing) {
      if (storeItemData?.price !== itemInput.price) {
        calculationStore.editItemPrice(itemId, itemInput.price);
      }

      if (storeItemData?.name !== itemInput.name) {
        calculationStore.editItemName(itemId, itemInput.name);
      }
    }
  }, [editing]);

  // TODO: After page first load if error from event make sure to bring toasts back in on page refresh
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
