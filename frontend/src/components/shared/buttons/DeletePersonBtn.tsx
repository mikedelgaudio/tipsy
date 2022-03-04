import DeletePersonIcon from "../icons/DeletePersonIcon";

function DeletePersonBtn({
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
      <div className="btn-wrapper">
        <DeletePersonIcon
          className={`icons ${iconClassName ? iconClassName : ""}`}
        />
        <span className="btn-text">Delete Person</span>
      </div>
    </button>
  );
}

export default DeletePersonBtn;
