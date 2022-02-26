import RemovePersonIcon from "../icons/RemovePersonIcon";

function DeleteUserBtn({
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
      <RemovePersonIcon className={`icons ${className ? className : ""}`} />
    </button>
  );
}

export default DeleteUserBtn;
