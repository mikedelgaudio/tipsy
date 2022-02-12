import "./PersonActions.css";
import deleteIcon from "../../../../../assets/icons/trash-alt-regular.svg";
import addItemIcon from "../../../../../assets/icons/plus-solid.svg";
import { removePerson } from "../../../../../redux/calculation/calculation-actions";
import { connect, RootStateOrAny } from "react-redux";
import EditBtn from "../../../../shared/buttons/EditBtn";
import { uiEditPerson } from "../../../../../redux/ui/ui-actions";
import { useEffect, useState } from "react";
import CloseBtn from "../../../../shared/buttons/CloseBtn";
import AddBtn from "../../../../shared/buttons/AddBtn";

function PersonActions({
  personId,
  dispatchUiEditPerson,
  dispatchRemovePerson,
  storeUiEditPersonId,
}: any) {
  // const editing = storeUiEditPersonId === personData.id;

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

      <AddBtn clickSideEffect={alert} ariaTitle={"Add item to person"} />

      <button type="button" onClick={() => dispatchRemovePerson(personId)}>
        <img className="icons" src={deleteIcon} alt="delete person" />
      </button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonActions);
