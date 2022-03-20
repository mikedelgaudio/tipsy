import { useDispatch } from "react-redux";
import { restartEvent } from "../../../redux/calculation/calculation-actions";
import Dialog from "../Dialog";
import CheckIcon from "../icons/CheckIcon";
import ResetIcon from "../icons/ResetIcon";

function ResetBtn({ ariaTitle, className = "", iconClassName = "" }: any) {
  const dispatch = useDispatch();
  const buttonData = (click: () => void) => {
    return (
      <button
        className={`btn ${className ? className : ""}`}
        type="reset"
        onClick={() => click()}
        title={ariaTitle}
        value="Reset"
      >
        <span className="btn-wrapper">
          <ResetIcon
            className={`icons ${iconClassName ? iconClassName : ""}`}
          />
          <span className="btn-text">Reset</span>
        </span>
      </button>
    );
  };

  const modalTitle = "Are you sure you want to reset?";

  const modalBody = (
    <div className="reset-dialog">
      <p>Resetting the app will clear all calculations and inputted data.</p>
      <button
        className={`btn  ${className ? className : ""}`}
        type="reset"
        onClick={() => dispatch(restartEvent())}
        value="Reset"
        data-a11y-dialog-hide
        aria-label="Close dialog"
      >
        <span className="btn-wrapper">
          <CheckIcon
            className={`icons ${iconClassName ? iconClassName : ""}`}
          />
          <span className="btn-text">Yes reset</span>
        </span>
      </button>

      <button
        className={`btn  ${className ? className : ""}`}
        data-a11y-dialog-hide
        aria-label="Close dialog"
      >
        <span className="btn-wrapper">
          <ResetIcon
            className={`icons ${iconClassName ? iconClassName : ""}`}
          />
          <span className="btn-text">Cancel</span>
        </span>
      </button>
    </div>
  );

  const modalData = {
    title: modalTitle,
    body: modalBody,
  };

  return (
    <>
      <Dialog
        buttonData={buttonData}
        modalData={modalData}
        ariaTitle={ariaTitle}
        className={className}
      />
    </>
  );
}

export default ResetBtn;
