import TrashIcon from "../icons/TrashIcon";

function DeleteBtn({
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
      className={`${className ? className : ""}`}
    >
      <TrashIcon className={`icons ${iconClassName ? iconClassName : ""}`} />
    </button>
  );
}

export default DeleteBtn;
