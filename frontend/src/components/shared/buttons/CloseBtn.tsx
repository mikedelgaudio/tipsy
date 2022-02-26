import CheckIcon from "../icons/CheckIcon";

function CloseBtn({ clickSideEffect, ariaTitle, className = "" }: any) {
  return (
    <button type="button" onClick={() => clickSideEffect()} title={ariaTitle}>
      <CheckIcon className={`icons ${className ? className : ""}`} />
    </button>
  );
}

export default CloseBtn;
