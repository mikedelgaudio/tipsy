import PencilIcon from "../icons/PencilIcon";

function EditBtn({ clickSideEffect, ariaTitle, className = "" }: any) {
  return (
    <button type="button" onClick={() => clickSideEffect()} title={ariaTitle}>
      <PencilIcon className={`icons ${className ? className : ""}`} />
    </button>
  );
}

export default EditBtn;
