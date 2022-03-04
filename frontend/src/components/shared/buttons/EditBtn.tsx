import PencilIcon from "../icons/PencilIcon";

function EditBtn({
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
        <PencilIcon className={`icons ${iconClassName ? iconClassName : ""}`} />
        <span className="btn-text">Edit</span>
      </div>
    </button>
  );
}

export default EditBtn;
