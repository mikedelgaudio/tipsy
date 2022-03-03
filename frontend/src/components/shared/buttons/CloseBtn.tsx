function CloseBtn({ clickSideEffect, ariaTitle, className = "" }: any) {
  return (
    <button
      className={`btn btn-success ${className ? className : ""}`}
      onClick={() => clickSideEffect()}
      title={ariaTitle}
    >
      Save
    </button>
  );
}

export default CloseBtn;
