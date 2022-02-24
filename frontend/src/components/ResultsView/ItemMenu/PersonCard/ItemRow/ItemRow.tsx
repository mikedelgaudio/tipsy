import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { didMount } from "../../../../../hooks/didMount";
import { AppStore, Item } from "../../../../../models/custom-models";
import {
  editItemName,
  editItemPrice,
  recalculateEvent,
  removeItem,
} from "../../../../../redux/calculation/calculation-actions";
import DeleteBtn from "../../../../shared/buttons/DeleteBtn";

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

  const [itemInput, setItemsInput] = useState(defaultItem);

  const itemInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const attributeIndex = 1;
    const fieldName = e.target.attributes[attributeIndex].textContent;
    switch (fieldName) {
      case "NAME":
        // dispatch edit item name
        setItemsInput({
          ...itemInput,
          name: e.target.value,
        });
        break;
      case "PRICE":
        // TODO
        // Ensure valid currency is only allowed when calculated
        setItemsInput({
          ...itemInput,
          price: e.target.value,
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
    if (!didMountOnce && !editing) {
      // Check if price or name changed
      // bad smell?
      if (storeItemData?.price !== itemInput.price) {
        dispatch(editItemPrice(itemId, itemInput.price));
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
      </div>

      <div className="personItemOptionRow">
        <button>Split?</button>
        <DeleteBtn
          clickSideEffect={dispatchRemoveItem}
          ariaTitle={`Delete ${storeItemData?.name}`}
        />
      </div>
    </li>
  );
}

export default ItemRow;
