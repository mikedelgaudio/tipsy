function EditBtn({ clickSideEffect, ariaTitle, className = "" }: any) {
  return (
    <button
      className={`btn btn-primary ${className ? className : ""}`}
      onClick={() => clickSideEffect()}
      title={ariaTitle}
    >
      Edit
    </button>
  );
}

export default EditBtn;
