import "./PersonActions.css";
import deleteIcon from "../../../../../assets/icons/trash-alt-regular.svg";
import { removePerson } from "../../../../../redux/calculation/calculation-actions";
import { connect, RootStateOrAny } from "react-redux";
import EditBtn from "../../../../shared/buttons/EditBtn";
import { uiEditPerson } from "../../../../../redux/ui/ui-actions";
import { useEffect, useState } from "react";
import CloseBtn from "../../../../shared/buttons/CloseBtn";

function PersonActions({
  personId,
  dispatchUiEditPerson,
  dispatchRemovePerson,
  storeUiEditPersonId,
}: any) {
  const [uiEditingId, setUiEditPerson] = useState(storeUiEditPersonId);

  const eventEditHandler = (editing: boolean) => {
    let id = personId;
    if (!editing) {
      id = "";
    }
    setUiEditPerson(id);
    dispatchUiEditPerson(id);
  };

  useEffect(() => {
    setUiEditPerson(storeUiEditPersonId);
  }, [storeUiEditPersonId]);

  return (
    <div className="personActions">
      {!uiEditingId ? (
        <EditBtn clickSideEffect={eventEditHandler} ariaTitle={"Edit person"} />
      ) : (
        <CloseBtn
          clickSideEffect={eventEditHandler}
          ariaTitle={"Stop editing person"}
        />
      )}

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
