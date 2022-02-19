import addIcon from "../../../assets/icons/add-item.svg";

function AddBtn({ clickSideEffect, ariaTitle }: any) {
  return (
    <button type="button" onClick={() => clickSideEffect()} title={ariaTitle}>
      <img className="icons" src={addIcon} alt={ariaTitle} />
    </button>
  );
}

export default AddBtn;
