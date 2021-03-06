import { observer } from "mobx-react";
import { useContext } from "react";
import { StoreContext } from "../../../store.context";
import { Modal } from "../modal";

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
            <svg
              className={`icons ${iconClassName ? iconClassName : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32 161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28 16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48c0-17.69-14.3-32-32-32zm-22.2 273.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32H48c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2 6.4-16.8-2.9-35.7-19.7-40.2z"
              />
            </svg>
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
              <svg
                className={`icons icon-sm ${
                  iconClassName ? iconClassName : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path
                  fill="currentColor"
                  d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06a31.894 31.894 0 0 1-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1 56.6 467.6c-6.328 7.594-15.42 11.52-24.59 11.52a31.907 31.907 0 0 1-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206 327.4 43.5c11.3-13.58 31.48-15.42 45.06-4.094 13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"
                />
              </svg>
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
              <svg
                className={`icons icon-light ${
                  iconClassName ? iconClassName : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 16c-17.67 0-32 14.31-32 32v74.09C392.1 66.52 327.4 32 256 32 161.5 32 78.59 92.34 49.58 182.2c-5.438 16.81 3.797 34.88 20.61 40.28 16.89 5.5 34.88-3.812 40.3-20.59C130.9 138.5 189.4 96 256 96c50.5 0 96.26 24.55 124.4 64H336c-17.67 0-32 14.31-32 32s14.33 32 32 32h128c17.67 0 32-14.31 32-32V48c0-17.69-14.3-32-32-32zm-22.2 273.6c-16.92-5.438-34.88 3.812-40.3 20.59C381.1 373.5 322.6 416 256 416c-50.5 0-96.25-24.55-124.4-64H176c17.67 0 32-14.31 32-32s-14.33-32-32-32H48c-17.67 0-32 14.31-32 32v144c0 17.69 14.33 32 32 32s32-14.31 32-32v-74.09C119.9 445.5 184.6 480 255.1 480c94.45 0 177.4-60.34 206.4-150.2 6.4-16.8-2.9-35.7-19.7-40.2z"
                />
              </svg>
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

    return (
      <>
        <Modal buttonLayout={buttonLayout} modalData={modalData} />
      </>
    );
  },
);

export { ResetBtn };
