import editIcon from "../../../assets/icons/pencil-solid.svg";

function EditBtn({ clickSideEffect, ariaTitle }: any) {
  return (
    <button type="button" onClick={() => clickSideEffect()} title={ariaTitle}>
      <img className="icons" src={editIcon} alt={ariaTitle} />
    </button>
  );
}

export default EditBtn;
