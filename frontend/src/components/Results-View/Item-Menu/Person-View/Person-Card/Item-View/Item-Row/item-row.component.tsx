import { observer } from "mobx-react";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { didMount } from "../../../../../../../hooks";
import { ItemMobx } from "../../../../../../../models/item.model";
import { StoreContext } from "../../../../../../../store.context";
import { DeleteBtn } from "../../../../../../shared/buttons";

const defaultItem: ItemMobx = {
  id: "",
  personId: "",
  name: "",
  price: "0.00",
  priceFloat: 0.0,
  errorName: false,
  errorPrice: false,
};

// const ItemRow = observer(({ itemId, editing }: any) => {

const ItemRow = observer(
  ({
    item,
    editing,
    lastItem,
  }: {
    item: ItemMobx;
    editing: boolean;
    lastItem: boolean;
  }) => {
    const { calculationStore } = useContext(StoreContext);
    const didMountOnce = didMount();
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

    // TODO is this required should the state useLocale()
    useEffect(() => {
      setItemsInput(item);
    }, [item]);

    useEffect(() => {
      if (!didMountOnce && !editing) {
        if (item.price !== itemInput.price) {
          calculationStore.editItemPrice(item.id, itemInput.price);
        }

        if (item.name !== itemInput.name) {
          calculationStore.editItemName(item.id, itemInput.name);
        }
      }
    }, [editing]);

    // TODO: After page first load if error from event make sure to bring toasts back in on page refresh
    // useEffect(() => {
    //   if (!didMountOnce) setError(defaultErrorState);
    // }, [storeEventId]);

    return (
      <li className={`personItem ${editing ? "editing" : ""} `}>
        <div className="personItemInfoRow">
          {!editing ? (
            <>
              <p
                className={`${
                  item.errorName ? "errorText" : ""
                } personItemName`}
                data-cy={`${item.name}-itemName`}
              >
                {item.name}
              </p>
            </>
          ) : (
            <>
              <div className="personItemDetailsContainer">
                <div className="inputWrapper">
                  <label htmlFor={`itemNameInput-${item.id}`}>
                    "{item.name}" Name
                  </label>
                  <input
                    id={`itemNameInput-${item.id}`}
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
                item.errorPrice ? "errorText" : ""
              } personItemPrice`}
              data-cy={`${item.name}-itemPrice`}
            >
              ${item.price}
            </p>
          ) : (
            <div className="inputWrapper">
              <label htmlFor={`itemPriceInput-${item.id}`}>
                "{item.name}" Price
              </label>
              <input
                id={`itemPriceInput-${item.id}`}
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
            clickSideEffect={() => calculationStore.deleteItem(item.id)}
            isDisabled={lastItem}
            ariaTitle={`Delete ${item.name}`}
          />
        </div>
      </li>
    );
  },
);

export { ItemRow };
