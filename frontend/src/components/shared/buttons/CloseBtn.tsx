import CheckIcon from "../icons/CheckIcon";

function CloseBtn({ clickSideEffect, ariaTitle, className = "" }: any) {
  return (
    <button
      className={`btn btn-success ${className ? className : ""}`}
      onClick={() => clickSideEffect()}
      title={ariaTitle}
    >
      <CheckIcon className="icons" />
      <span className="btn-text">Save</span>
    </button>
  );
}

export default CloseBtn;
