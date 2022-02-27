import PencilIcon from "../icons/PencilIcon";

function EditBtn({
  clickSideEffect,
  ariaTitle,
  className = "",
  iconClassName = "",
}: any) {
  return (
    <button
      className={`${className ? className : ""}`}
      onClick={() => clickSideEffect()}
      title={ariaTitle}
    >
      <PencilIcon className={`icons ${iconClassName ? iconClassName : ""}`} />
    </button>
  );
}

export default EditBtn;
