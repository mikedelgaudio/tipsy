import deleteIcon from "../../../assets/icons/trash-alt-regular.svg";

function DeleteBtn({ clickSideEffect, ariaTitle, uid }: any) {
  return (
    <button
      type="button"
      onClick={() => clickSideEffect(uid)}
      title={ariaTitle}
    >
      <img className="icons" src={deleteIcon} alt={ariaTitle} />
    </button>
  );
}

export default DeleteBtn;
