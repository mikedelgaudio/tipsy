import AddItemIcon from "../icons/AddItemIcon";

function AddBtn({
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
        <AddItemIcon
          className={`icons ${iconClassName ? iconClassName : ""}`}
        />
        <span className="btn-text">Add Item</span>
      </div>
    </button>
  );
}

export default AddBtn;
