import editIcon from "../../../assets/icons/edit-regular.svg";

function EditBtn({ clickSideEffect, ariaTitle }: any) {
  return (
    <button
      type="button"
      onClick={() => clickSideEffect(true)}
      title={ariaTitle}
    >
      <img className="icons" src={editIcon} alt={ariaTitle} />
    </button>
  );
}

export default EditBtn;
