import TrashIcon from "../icons/TrashIcon";

function DeleteBtn({
  clickSideEffect,
  ariaTitle,
  isDisabled,
  className = "",
  iconClassName = "",
}: any) {
  return (
    <button
      onClick={() => clickSideEffect()}
      title={ariaTitle}
      disabled={isDisabled}
      className={`btn ${className ? className : ""}`}
    >
      <span className="btn-wrapper">
        <TrashIcon className={`icons ${iconClassName ? iconClassName : ""}`} />
        <span className="btn-text">Delete</span>
      </span>
    </button>
  );
}

export { DeleteBtn };
