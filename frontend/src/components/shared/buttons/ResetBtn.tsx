import { useDispatch } from "react-redux";
import { restartEvent } from "../../../redux/calculation/calculation-actions";
import AddPersonIcon from "../icons/AddPersonIcon";
import ResetIcon from "../icons/ResetIcon";

function ResetBtn({ ariaTitle, className = "", iconClassName = "" }: any) {
  const dispatch = useDispatch();
  return (
    <button
      className={`btn ${className ? className : ""}`}
      type="reset"
      onClick={() => dispatch(restartEvent())}
      title={ariaTitle}
      value="Reset"
    >
      <span className="btn-wrapper">
        <ResetIcon className={`icons ${iconClassName ? iconClassName : ""}`} />
        <span className="btn-text">Reset</span>
      </span>
    </button>
  );
}

export default ResetBtn;
