import AddPersonIcon from "../icons/AddPersonIcon";

function AddPersonBtn({ clickSideEffect, ariaTitle, className = "" }: any) {
  return (
    <button className="btn" onClick={() => clickSideEffect()} title={ariaTitle}>
      <AddPersonIcon className={`icons ${className ? className : ""}`} />
      <span className="btn-text">Add Person</span>
    </button>
  );
}

export default AddPersonBtn;
