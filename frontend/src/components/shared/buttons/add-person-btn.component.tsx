import AddPersonIcon from "../icons/AddPersonIcon";

function AddPersonBtn({
  clickSideEffect,
  ariaTitle,
  className = "",
  iconClassName = "",
}: any) {
  return (
    <button
      className={`btn ${className ? className : ""}`}
      onClick={() => clickSideEffect()}
      title={ariaTitle}
    >
      <span className="btn-wrapper">
        <AddPersonIcon
          className={`icons ${iconClassName ? iconClassName : ""}`}
        />
        <span className="btn-text">Add Person</span>
      </span>
    </button>
  );
}

export { AddPersonBtn };
