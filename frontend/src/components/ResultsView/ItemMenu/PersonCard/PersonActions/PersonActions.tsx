import "./PersonActions.css";
import {
  addItem,
  deletePerson,
} from "../../../../../redux/calculation/calculation-actions";
import { useDispatch, useSelector } from "react-redux";
import { EditBtn } from "../../../../shared/buttons/editBtn.component";
import { CloseBtn } from "../../../../shared/buttons/closeBtn.component";
import { AddBtn } from "../../../../shared/buttons/addBtn.component";
import { AppStore } from "../../../../../models/custom-models";
import { DeletePersonBtn } from "../../../../shared/buttons/deletePersonBtn.component";

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

export default PersonActions;
