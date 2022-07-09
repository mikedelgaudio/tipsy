import { computed } from "mobx";
import { observer } from "mobx-react";
import { useContext } from "react";
import { Item } from "../../../../../../models/item.model";
import { StoreContext } from "../../../../../../store.context";
import { ItemRow } from "./Item-Row";

const ItemsView = observer(
  ({ personId, editing }: { personId: string; editing: boolean }) => {
    const { calculationStore } = useContext(StoreContext);
    const items: Item[] = computed(() =>
      calculationStore.getPersonItems(personId),
    ).get();

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
