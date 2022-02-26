import TrashIcon from "../icons/TrashIcon";

function DeleteBtn({
  clickSideEffect,
  ariaTitle,
  isDisabled,
  className = "",
}: any) {
  return (
    <button
      type="button"
      onClick={() => clickSideEffect()}
      title={ariaTitle}
      disabled={isDisabled}
    >
      <TrashIcon className={`icons ${className ? className : ""}`} />
    </button>
  );
}

export default DeleteBtn;
