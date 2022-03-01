import TrashIcon from "../icons/TrashIcon";
const x = () => {
  console.log("hello");
  return "helllo";
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
      <TrashIcon className={`icons ${className ? className : ""}`} />
    </button>
  );
}

export default DeleteBtn;
