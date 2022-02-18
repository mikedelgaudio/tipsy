import "./PersonActions.css";
import {
  addItem,
  recalculateEvent,
  removePerson,
} from "../../../../../redux/calculation/calculation-actions";
import { useDispatch, useSelector } from "react-redux";
import EditBtn from "../../../../shared/buttons/EditBtn";
import { uiEditPerson } from "../../../../../redux/ui/ui-actions";
import { useEffect, useState } from "react";
import CloseBtn from "../../../../shared/buttons/CloseBtn";
import AddBtn from "../../../../shared/buttons/AddBtn";
import DeleteBtn from "../../../../shared/buttons/DeleteBtn";
import { AppStore } from "../../../../../models/custom-models";

function PersonActions({ personId }: any) {
  const dispatch = useDispatch();

  // Store Selectors
  const personsLength = useSelector(
    (state: AppStore) => state.calculation.persons.length
  );

  const storeUiEditPersonId = useSelector(
    (state: AppStore) => state.ui.uiEditPersonId === personId
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

  const [editing, setUiEditPerson] = useState(storeUiEditPersonId);

  const eventEditHandler = (editing: boolean) => {
    let id = personId;
    if (!editing) {
      id = "";
      dispatch(recalculateEvent());
    }
    setUiEditPerson(id);
    dispatch(uiEditPerson(id));
  };

  useEffect(() => {
    setUiEditPerson(storeUiEditPersonId);
  }, [storeUiEditPersonId]);

  return (
    <div className="personActions">
      {!editing ? (
        <EditBtn clickSideEffect={eventEditHandler} ariaTitle={"Edit person"} />
      ) : (
        <CloseBtn
          clickSideEffect={eventEditHandler}
          ariaTitle={"Stop editing person"}
        />
      )}

      <AddBtn
        clickSideEffect={dispatchAddItem}
        ariaTitle={"Add item to person"}
      />

      <DeleteBtn
        clickSideEffect={dispatchRemovePerson}
        ariaTitle={"Delete person"}
        isDisabled={personsLength < 2}
      />
    </div>
  );
}

export default PersonActions;
