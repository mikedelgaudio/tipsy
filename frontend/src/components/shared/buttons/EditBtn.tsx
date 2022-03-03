import PencilIcon from "../icons/PencilIcon";

function EditBtn({ clickSideEffect, ariaTitle, className = "" }: any) {
  return (
    <button
      className={`btn btn-primary ${className ? className : ""}`}
      onClick={() => clickSideEffect()}
      title={ariaTitle}
    >
      <PencilIcon className="icons" />
    </button>
  );
}

export default EditBtn;
