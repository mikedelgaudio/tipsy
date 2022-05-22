import { observer } from "mobx-react";
import { Item } from "../../../../../../models/item.model";
import { ItemRow } from "./Item-Row";

const ItemsView = observer(
  ({ items, editing }: { items: Item[]; editing: boolean }) => {
    return (
      <>
        {items.map((item: Item) => (
          <ItemRow
            key={item.id}
            item={item}
            editing={editing}
            lastItem={items.length < 2}
          />
        ))}
      </>
    );
  },
);

export { ItemsView };
