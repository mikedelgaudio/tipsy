import { ChangeEvent, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Item } from "../../../../../models/custom-models";
import {
  editItemName,
  editItemPrice,
  removeItem,
} from "../../../../../redux/calculation/calculation-actions";
import DeleteBtn from "../../../../shared/buttons/DeleteBtn";

const defaultItem: Item = {
  id: "",
  personId: "",
  name: "",
  qty: 1,
  price: "0.00",
};

function ItemRow({
  item,
  editing,
  dispatchRemoveItem,
  dispatchEditItemName,
  dispatchEditItemPrice,
}: any) {
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
        dispatchEditItemName(item.id, e.target.value);
        break;
      case "PRICE":
        // dispatch edit item price
        // TODO
        // Ensure valid currency is only allowed when calculated
        setItemsInput({
          ...itemInput,
          price: e.target.value,
        });
        dispatchEditItemPrice(item.id, e.target.value);
        break;
      case "QTY":
        // dispatch edit item qty TBD
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setItemsInput(item);
  }, [item]);

  return (
    <li className="personItem" key={item.id}>
      <div className="personItemInfoRow">
        {!editing ? (
          <>
            <div className="personItemDetailsContainer">
              {/* <span className="personItemQty">{item.qty}</span> */}
              <span className="personItemName">{item.name}</span>
            </div>

            <span className="personItemPrice">${item.price}</span>
          </>
        ) : (
          <>
            <div className="personItemDetailsContainer">
              {/* <input
                type="text"
                field-name="QTY"
                onChange={itemInputHandler}
                value={itemInput.qty || ""}
              /> */}
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
          uid={item.id}
          ariaTitle={`Delete ${item.name}`}
        />
      </div>
    </li>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchRemoveItem: (itemId: string) => dispatch(removeItem(itemId)),
    dispatchEditItemName: (itemId: string, newName: string) =>
      dispatch(editItemName(itemId, newName)),
    dispatchEditItemPrice: (itemId: string, newPrice: string) =>
      dispatch(editItemPrice(itemId, newPrice)),
  };
};

export default connect(null, mapDispatchToProps)(ItemRow);
