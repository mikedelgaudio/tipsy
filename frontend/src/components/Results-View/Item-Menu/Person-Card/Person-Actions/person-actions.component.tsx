import { observer } from "mobx-react";
import { useContext } from "react";
import { PersonMobx } from "../../../../../models/person.model";
import { StoreContext } from "../../../../../store.context";
import {
  AddBtn,
  CloseBtn,
  DeletePersonBtn,
  EditBtn,
} from "../../../../shared/buttons";
import "./person-actions.component.css";

const PersonActions = observer(({ personId, editing, setEditing }: any) => {
  const { calculationStore } = useContext(StoreContext);

  // Store Selectors
  // const personsLength = useSelector(
  //   (state: AppStore) => state.calculation.persons.length,
  // );

  // const personName = useSelector(
  //   (state: AppStore) =>
  //     state.calculation.persons.find(person => person.id === personId)?.name,
  // );

  const personsLength = calculationStore.persons.length;

  const personName = calculationStore.persons.find(
    (person: PersonMobx) => person.id === personId,
  )?.name;

  // Dispatchers
  const dispatchDeletePerson = () => {
    calculationStore.deletePerson(personId);
  };

  const dispatchAddItem = () => {
    calculationStore.addItem(personId);
  };

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
        clickSideEffect={dispatchAddItem}
        ariaTitle={`Add item to ${personName}`}
      />

      <DeletePersonBtn
        clickSideEffect={dispatchDeletePerson}
        ariaTitle={`Delete ${personName}`}
        isDisabled={personsLength < 2}
        iconClassName="icon-xl"
      />
    </div>
  );
});

export { PersonActions };
