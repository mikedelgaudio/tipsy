import DeletePersonIcon from "../icons/DeletePersonIcon";

function DeletePersonBtn({
  clickSideEffect,
  ariaTitle,
  isDisabled,
  className = "",
}: any) {
  return (
    <button
      onClick={() => clickSideEffect()}
      title={ariaTitle}
      disabled={isDisabled}
      className="btn"
    >
      <DeletePersonIcon className={`icons ${className ? className : ""}`} />
      <span className="btn-text">Delete Person</span>
    </button>
  );
}

export default DeletePersonBtn;
