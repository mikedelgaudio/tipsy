import checkIcon from "../../../assets/icons/check-square-regular.svg";

function CloseBtn({ clickSideEffect, ariaTitle }: any) {
  return (
    <button
      type="button"
      onClick={() => clickSideEffect(false)}
      title={ariaTitle}
    >
      <img className="icons" src={checkIcon} alt={ariaTitle} />
    </button>
  );
}

export default CloseBtn;