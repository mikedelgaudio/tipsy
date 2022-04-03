import { CheckIcon } from "../icons";

function CloseBtn({
  clickSideEffect,
  ariaTitle,
  className = "",
  iconClassName = "",
}: any) {
  return (
    <button
      className={`btn btn-success ${className ? className : ""}`}
      onClick={() => clickSideEffect()}
      title={ariaTitle}
    >
      <span className="btn-wrapper">
        <CheckIcon
          className={`icons icon-light ${iconClassName ? iconClassName : ""}`}
        />
        <span className="btn-text">Save</span>
      </span>
    </button>
  );
}

export { CloseBtn };
