import { AddItemIcon } from "../icons";

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
      <span className="btn-wrapper">
        <AddItemIcon
          className={`icons ${iconClassName ? iconClassName : ""}`}
        />
        <span className="btn-text">Add Item</span>
      </span>
    </button>
  );
}

export { AddBtn };
