import "./PersonActions.css";
import {
  addItem,
  recalculateEvent,
  removePerson,
} from "../../../../../redux/calculation/calculation-actions";
import { useDispatch, useSelector } from "react-redux";
import EditBtn from "../../../../shared/buttons/EditBtn";
import CloseBtn from "../../../../shared/buttons/CloseBtn";
import AddBtn from "../../../../shared/buttons/AddBtn";
import { AppStore } from "../../../../../models/custom-models";
import DeleteUserBtn from "../../../../shared/buttons/DeleteUserBtn";

function PersonActions({ personId, editing, setEditing }: any) {
  const dispatch = useDispatch();

  // Store Selectors
  const personsLength = useSelector(
    (state: AppStore) => state.calculation.persons.length,
  );

  // Dispatchers
  const dispatchRemovePerson = () => {
    dispatch(removePerson(personId));
    dispatch(recalculateEvent());
  };

  const dispatchAddItem = () => {
    dispatch(addItem(personId));
    dispatch(recalculateEvent());
  };

  return (
    <div className="personActions">
      {!editing ? (
        <EditBtn
          clickSideEffect={() => setEditing(true)}
          ariaTitle={"Edit person"}
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
        clickSideEffect={dispatchRemovePerson}
        ariaTitle={"Delete person"}
        isDisabled={personsLength < 2}
        className="icon-xl"
      />
    </div>
  );
}

export default PersonActions;
