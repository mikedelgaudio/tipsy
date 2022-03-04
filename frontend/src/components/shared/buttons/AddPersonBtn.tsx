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
      <div className="btn-wrapper">
        <AddPersonIcon
          className={`icons ${iconClassName ? iconClassName : ""}`}
        />
        <span className="btn-text">Add Person</span>
      </div>
    </button>
  );
}

export default AddPersonBtn;
