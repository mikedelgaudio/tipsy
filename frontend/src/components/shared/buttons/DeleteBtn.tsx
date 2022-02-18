import deleteIcon from "../../../assets/icons/trash-alt-regular.svg";

function DeleteBtn({ clickSideEffect, ariaTitle, uid, isDisabled }: any) {
  return (
    <button
      type="button"
      onClick={() => clickSideEffect(uid)}
      title={ariaTitle}
      disabled={isDisabled}
    >
      <img className="icons" src={deleteIcon} alt={ariaTitle} />
    </button>
  );
}

export default DeleteBtn;
