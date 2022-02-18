import deleteIcon from "../../../assets/icons/trash-alt-regular.svg";

function DeleteBtn({ clickSideEffect, ariaTitle, isDisabled }: any) {
  return (
    <button
      type="button"
      onClick={() => clickSideEffect()}
      title={ariaTitle}
      disabled={isDisabled}
    >
      <img className="icons" src={deleteIcon} alt={ariaTitle} />
    </button>
  );
}

export default DeleteBtn;
