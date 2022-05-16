import { computed } from "mobx";
import { observer } from "mobx-react";
import { useContext } from "react";
import { StoreContext } from "../../../../../../store.context";
import {
  AddBtn,
  CloseBtn,
  DeletePersonBtn,
  EditBtn,
} from "../../../../../shared/buttons";
import "./person-actions.component.css";

const PersonActions = observer(({ personId, editing, setEditing }: any) => {
  const { calculationStore } = useContext(StoreContext);

  const personsLength = computed(() => calculationStore.persons.length).get();

  const personName = computed(
    () => calculationStore.getPerson(personId)?.name,
  ).get();

  return (
    <div className="personActions">
      {!editing ? (
        <EditBtn
          clickSideEffect={() => setEditing(true)}
          ariaTitle={`Edit ${personName}`}
          className="btn-light"
        />
      ) : (
        <CloseBtn
          clickSideEffect={() => setEditing(false)}
          ariaTitle={`Stop editing ${personName}`}
        />
      )}

      <AddBtn
        clickSideEffect={() => calculationStore.addItem(personId)}
        ariaTitle={`Add item to ${personName}`}
      />

      <DeletePersonBtn
        clickSideEffect={() => calculationStore.deletePerson(personId)}
        ariaTitle={`Delete ${personName}`}
        isDisabled={personsLength < 2}
        iconClassName="icon-xl"
      />
    </div>
  );
});

export { PersonActions };
