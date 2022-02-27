import CheckIcon from "../icons/CheckIcon";

function CloseBtn({
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
      <CheckIcon className={`icons ${iconClassName ? iconClassName : ""}`} />
    </button>
  );
}

export default CloseBtn;
