import "./PersonActions.css";
import {
  addItem,
  deletePerson,
} from "../../../../../redux/calculation/calculation-actions";
import { useDispatch, useSelector } from "react-redux";
import EditBtn from "../../../../shared/buttons/EditBtn";
import CloseBtn from "../../../../shared/buttons/CloseBtn";
import AddBtn from "../../../../shared/buttons/AddBtn";
import { AppStore } from "../../../../../models/custom-models";
import DeleteUserBtn from "../../../../shared/buttons/DeletePersonBtn";

function PersonActions({ personId, editing, setEditing }: any) {
  const dispatch = useDispatch();

  // Store Selectors
  const personsLength = useSelector(
    (state: AppStore) => state.calculation.persons.length,
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
          ariaTitle={"Edit person"}
          className="btn-light"
        />
      ) : (
        <CloseBtn
          clickSideEffect={() => setEditing(false)}
          ariaTitle={"Stop editing person"}
        />
      )}

      <AddBtn
        clickSideEffect={dispatchAddItem}
        ariaTitle={"Add item to person"}
      />

      <DeleteUserBtn
        clickSideEffect={dispatchDeletePerson}
        ariaTitle={"Delete person"}
        isDisabled={personsLength < 2}
        iconClassName="icon-xl"
      />
    </div>
  );
}

export default PersonActions;
