import { observer } from "mobx-react";
import { useContext } from "react";
import { StoreContext } from "../../../store.context";
import { Dialog } from "../dialog";
import { ResetIcon, XIcon } from "../icons";

const ResetBtn = observer(
  ({ ariaTitle, className = "", iconClassName = "" }: any) => {
    const { calculationStore } = useContext(StoreContext);

    const buttonLayout = (click: () => void) => {
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
            <span className="btn-text-allow-full">Reset</span>
          </span>
        </button>
      );
    };

    const handleReset = () => {
      calculationStore.reset();
    };

    const modalTitle = "Are you sure you want to reset?";
    const modalBody = (
      <div className="dialog-body">
        <p>Resetting the app will clear all calculations and inputted data.</p>
        <div className="dialog-btn-row">
          <button
            className={`btn  ${className ? className : ""}`}
            data-a11y-dialog-hide
            aria-label="Close dialog"
          >
            <span className="btn-wrapper">
              <XIcon
                className={`icons icon-sm ${
                  iconClassName ? iconClassName : ""
                }`}
              />
              <span className="btn-text-allow-full">Cancel</span>
            </span>
          </button>
          <button
            className={`btn btn-danger ${className ? className : ""}`}
            type="reset"
            onClick={() => handleReset()}
            value="Reset"
            data-a11y-dialog-hide
            aria-label="Close dialog"
          >
            <span className="btn-wrapper">
              <ResetIcon
                className={`icons icon-light ${
                  iconClassName ? iconClassName : ""
                }`}
              />
              <span className="btn-text-allow-full">Reset</span>
            </span>
          </button>
        </div>
      </div>
    );

    const modalData = {
      title: modalTitle,
      body: modalBody,
    };

    const dialog = document.querySelector("#dialog");

    return (
      <>
        {buttonLayout(() => {
          if (dialog) dialog.showModal();
        })}
        <Dialog data={modalData} />
      </>
    );
  },
);

export { ResetBtn };
