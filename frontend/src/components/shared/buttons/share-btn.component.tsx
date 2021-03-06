import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { ToastService } from "../../../services/toast.service";
import { StoreContext } from "../../../store.context";
import { Modal } from "../modal";

const ShareBtn = observer(
  ({ ariaTitle, className = "", iconClassName = "" }: any) => {
    const { calculationStore } = useContext(StoreContext);

    const toastService = new ToastService();

    const buttonLayout = (click: () => void) => {
      return (
        <button
          onClick={() => click()}
          className={`btn ${className ? className : ""}`}
          title={ariaTitle}
        >
          <span className="btn-wrapper">
            <svg
              className={`icons ${iconClassName ? iconClassName : ""}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M448 127.1c0 53.9-43 96-96 96-25.9 0-49.4-9.3-66.6-26l-94.1 47c.5 3.9-.2 7-.2 11.9 0 4 .7 7.1.2 11.9l94.1 47c17.2-16.7 40.7-26.9 66.6-26.9 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96 0-4.9.2-8 .7-11.9l-94.1-47C145.4 341.8 121.9 352 96 352c-53.02 0-96-43-96-96 0-53.9 42.98-96 96-96 25.9 0 49.4 10.2 66.6 26.9l94.1-47c-.5-4.8-.7-7.9-.7-11.9 0-53.02 42.1-96 96-96 53 0 96 42.98 96 96v-.9zm-352.9 160c18.6 0 32-13.4 32-32 0-16.8-13.4-32-32-32-16.77 0-32 15.2-32 32 0 18.6 15.23 32 32 32zM352 95.1c-17.7 0-32 15.2-32 32 0 18.6 14.3 32 32 32s32-13.4 32-32c0-16.8-14.3-32-32-32zm0 320.9c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"
              />
            </svg>
            <span className="btn-text-allow-full">Share</span>
          </span>
        </button>
      );
    };

    const snapshot = ({ isEmail = false }): string => {
      const newlineChar = isEmail.valueOf() ? "%0d%0a" : "\n";

      const eventTotal = calculationStore.eventTotal;
      const persons = calculationStore.persons;

      const personData = persons.map(person => {
        return `${person.name}: $${person.totalDue}${newlineChar}`;
      });

      const promotion = "Calculated by tipsy.delgaudio.dev";

      return `How much everyone owes (tip and tax included):${newlineChar}${personData.join(
        "",
      )}${newlineChar}Total: $${eventTotal}${newlineChar}${newlineChar}${promotion}`;
    };

    const modalTitle = "Share with family or friends";
    const modalBody = (
      <div className="dialog-body">
        <p>
          Share a snapshot of the calculations by email or copy to your
          clipboard.
        </p>
        <div className="dialog-btn-row">
          <button
            className={`btn  ${className ? className : ""}`}
            data-a11y-dialog-hide
            aria-label="Close dialog"
            onClick={() => triggerEmail()}
          >
            <span className="btn-wrapper">
              <svg
                className="icons"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 64c26.5 0 48 21.49 48 48 0 15.1-7.1 29.3-19.2 38.4L275.2 313.6a32.1 32.1 0 0 1-38.4 0L19.2 150.4C7.113 141.3 0 127.1 0 112c0-26.51 21.49-48 48-48h416zM217.6 339.2a63.9 63.9 0 0 0 76.8 0L512 176v208c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V176l217.6 163.2z"
                />
              </svg>
              <span className="btn-text-allow-full">Email</span>
            </span>
          </button>
          <button
            className={`btn  ${className ? className : ""}`}
            data-a11y-dialog-hide
            aria-label="Close dialog"
            onClick={() => triggerClipboardCopy()}
          >
            <span className="btn-wrapper">
              <svg
                className="icons"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M384 96V0H272c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48V128h-95.1c-18.5 0-32.9-14.4-32.9-32zm32-96v96h96L416 0zM192 352V128H48c-26.51 0-48 21.49-48 48v288c0 26.51 21.49 48 48 48h192c26.51 0 48-21.49 48-48v-48h-32c-35.3 0-64-28.7-64-64z"
                />
              </svg>
              <span className="btn-text-allow-full">Copy to clipboard</span>
            </span>
          </button>
        </div>
      </div>
    );

    const modalData = {
      title: modalTitle,
      body: modalBody,
    };

    const triggerWebShare = () => {
      if (!navigator.share) return; // TODO: Display error

      // TODO: Create a side effect or logger notification?
      navigator
        .share({
          title: "Tipsy Calculations",
          text: `${snapshot({ isEmail: false })}`,
        })
        .catch(console.warn);
    };

    const triggerEmail = () => {
      window.location.href = `mailto:Your_friend's_email?subject=How much everyone owes&body=${snapshot(
        { isEmail: true },
      )}`;
    };

    const triggerClipboardCopy = () => {
      const TOAST_ID = "CLIPBOARD_COPY";
      if (!navigator.clipboard) return; // TODO: Display error
      navigator.clipboard
        .writeText(snapshot({ isEmail: false }))
        .then(() => toastService.success(TOAST_ID, "Copied to clipboard", true))
        .catch(() =>
          toastService.error(TOAST_ID, "Failed to copy to clipboard", true),
        );
    };

    /**
     * Determines when to use the WebShareAPI
     * @returns true when allowed to use default WebShareAPI
     */
    const displayWebShareAPI = (): boolean => {
      if (!navigator.share || document.documentElement.clientWidth >= 576)
        return false;
      return true;
    };

    return (
      <>
        {displayWebShareAPI() ? (
          buttonLayout(triggerWebShare)
        ) : (
          <Modal
            buttonLayout={buttonLayout}
            modalData={modalData}
            ariaTitle={ariaTitle}
            className={className}
          />
        )}
      </>
    );
  },
);

export { ShareBtn };
