import ShareIcon from "../icons/ShareIcon";
import Dialog from "../Dialog";
import store from "../../../redux/store";
import CopyIcon from "../icons/CopyIcon";
import MailIcon from "../icons/MailIcon";
import { errorToast, successToast } from "../toasts/toasts";

function ShareBtn({ ariaTitle, className = "", iconClassName = "" }: any) {
  const buttonLayout = (click: () => void) => {
    return (
      <button
        onClick={() => click()}
        className={`btn ${className ? className : ""}`}
        title={ariaTitle}
      >
        <span className="btn-wrapper">
          <ShareIcon
            className={`icons ${iconClassName ? iconClassName : ""}`}
          />
          <span className="btn-text-allow-full">Share</span>
        </span>
      </button>
    );
  };

  const snapshot = ({ isEmail = false }): string => {
    const newlineChar = isEmail.valueOf() ? "%0d%0a" : "\n";

    const eventTotal = store.getState().calculation.eventTotal;
    const persons = store.getState().calculation.persons;

    const personData = persons.map(person => {
      return `${person.name}: $${person.totalDue}${newlineChar}`;
    });

    const promotion = "Calculated by tipsy.delgaudiomike.com";

    return `How much everyone owes:${newlineChar}${personData.join(
      "",
    )}${newlineChar}Total: $${eventTotal}${newlineChar}${newlineChar}${promotion}`;
  };

  // TODO: Cleanup to different folder?
  const modalTitle = "Share with family or friends";
  const modalBody = (
    <div className="dialog-body">
      <p>
        Share a snapshot of the calculations by email or copy to your clipboard.
      </p>
      <div className="dialog-btn-row">
        <button
          className={`btn  ${className ? className : ""}`}
          data-a11y-dialog-hide
          aria-label="Close dialog"
          onClick={() => triggerEmail()}
        >
          <span className="btn-wrapper">
            <MailIcon className="icons" />
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
            <CopyIcon className="icons" />
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
    if (!navigator.clipboard) return; // TODO: Display error
    navigator.clipboard
      .writeText(snapshot({ isEmail: false }))
      .then(() =>
        successToast({ current: "CLIPBOARD_COPY" }, "Copied to clipboard"),
      )
      .catch(() =>
        errorToast(
          { current: "CLIPBOARD_COPY" },
          "Failed to copy to clipboard",
          true,
        ),
      );
  };

  return (
    <>
      {navigator["share"] ? (
        buttonLayout(triggerWebShare)
      ) : (
        <Dialog
          buttonLayout={buttonLayout}
          modalData={modalData}
          ariaTitle={ariaTitle}
          className={className}
        />
      )}
    </>
  );
}

export default ShareBtn;
