import addIcon from "../../../assets/icons/plus-solid.svg";

function AddBtn({ clickSideEffect, ariaTitle }: any) {
  return (
    <button type="button" onClick={() => clickSideEffect()} title={ariaTitle}>
      <img className="icons" src={addIcon} alt={ariaTitle} />
    </button>
  );
}

export default AddBtn;
