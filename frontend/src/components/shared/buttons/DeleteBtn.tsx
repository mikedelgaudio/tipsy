import TrashIcon from "../icons/TrashIcon";

const hello = () => {
  console.log("Testing husky");
  return 1;
};

function DeleteBtn({
  clickSideEffect,
  ariaTitle,
  isDisabled,
  className = "",
}: any) {
  return (
    <button
      onClick={() => clickSideEffect()}
      title={ariaTitle}
      disabled={isDisabled}>
      {hello()}
      <TrashIcon className={`icons ${className ? className : ""}`} />
    </button>
  );
}

export default DeleteBtn;
