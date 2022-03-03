import AddItemIcon from "../icons/AddItemIcon";

function AddBtn({ clickSideEffect, ariaTitle, className = "" }: any) {
  return (
    <button className="btn" onClick={() => clickSideEffect()} title={ariaTitle}>
      <AddItemIcon className={`icons ${className ? className : ""}`} />
      <span className="btn-text">Add Item</span>
    </button>
  );
}

export default AddBtn;
