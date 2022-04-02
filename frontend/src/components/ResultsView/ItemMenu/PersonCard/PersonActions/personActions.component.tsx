import "./personActions.component.css";
import {
  addItem,
  deletePerson,
} from "../../../../../redux/calculation/calculation-actions";
import { useDispatch, useSelector } from "react-redux";
import {
  EditBtn,
  CloseBtn,
  AddBtn,
  DeletePersonBtn,
} from "../../../../shared/buttons";
import { AppStore } from "../../../../../models/custom-models";

function PersonActions({ personId, editing, setEditing }: any) {
  const dispatch = useDispatch();

  // Store Selectors
  const personsLength = useSelector(
    (state: AppStore) => state.calculation.persons.length,
  );

  const personName = useSelector(
    (state: AppStore) =>
      state.calculation.persons.find(person => person.id === personId)?.name,
  );

  // Dispatchers
  const dispatchDeletePerson = () => {
    dispatch(deletePerson(personId));
  };

  const dispatchAddItem = () => {
    dispatch(addItem(personId));
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
}

export { PersonActions };
