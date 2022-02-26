import AddItemIcon from "../icons/AddItemIcon";

function AddBtn({ clickSideEffect, ariaTitle, className = "" }: any) {
  return (
    <button onClick={() => clickSideEffect()} title={ariaTitle}>
      <AddItemIcon className={`icons ${className ? className : ""}`} />
    </button>
  );
}

export default AddBtn;
