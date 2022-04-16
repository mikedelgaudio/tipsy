import { observer } from "mobx-react";
import { ItemMobx } from "../../../../../../models/item.model";
import { ItemRow } from "./Item-Row";

const ItemsView = observer(
  ({ items, editing }: { items: ItemMobx[]; editing: boolean }) => {
    return (
      <>
        {items.map((item: ItemMobx) => (
          <ItemRow key={item.id} item={item} editing={editing} />
        ))}
      </>
    );
  },
);

export { ItemsView };
