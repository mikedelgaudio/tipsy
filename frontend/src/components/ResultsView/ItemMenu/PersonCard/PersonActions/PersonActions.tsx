import "./PersonActions.css";
import {
  addItem,
  removePerson,
} from "../../../../../redux/calculation/calculation-actions";
import { connect, RootStateOrAny } from "react-redux";
import EditBtn from "../../../../shared/buttons/EditBtn";
import { uiEditPerson } from "../../../../../redux/ui/ui-actions";
import { useEffect, useState } from "react";
import CloseBtn from "../../../../shared/buttons/CloseBtn";
import AddBtn from "../../../../shared/buttons/AddBtn";
import DeleteBtn from "../../../../shared/buttons/DeleteBtn";

function PersonActions({
  personId,
  dispatchUiEditPerson,
  dispatchRemovePerson,
  dispatchAddItem,
  storeUiEditPersonId,
}: any) {
  const [editing, setUiEditPerson] = useState(storeUiEditPersonId);

  const eventEditHandler = (editing: boolean) => {
    let id = personId;
    if (!editing) {
      id = "";
    }
    setUiEditPerson(id);
    dispatchUiEditPerson(id);
  };

  useEffect(() => {
    setUiEditPerson(storeUiEditPersonId === personId);
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
        uid={personId}
      />

      <DeleteBtn
        clickSideEffect={dispatchRemovePerson}
        ariaTitle={"Delete person"}
        uid={personId}
      />
    </div>
  );
}
const mapStateToProps = (state: RootStateOrAny) => {
  return {
    storeUiEditPersonId: state.ui.uiEditPersonId,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatchUiEditPerson: (personId: string) =>
      dispatch(uiEditPerson(personId)),
    dispatchRemovePerson: (personId: string) =>
      dispatch(removePerson(personId)),
    dispatchAddItem: (personId: string) => dispatch(addItem(personId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonActions);
