import { useA11yDialog } from "react-a11y-dialog";
import { createPortal } from "react-dom";
import XIcon from "../icons/XIcon";
import "./Dialog.css";

const Dialog = ({ buttonLayout, modalData }: any) => {
  // `instance` is the `a11y-dialog` instance.
  // `attr` is an object with the following keys:
  // - `container`: the dialog container
  // - `overlay`: the dialog overlay (sometimes called backdrop)
  // - `dialog`: the actual dialog box
  // - `title`: the dialog mandatory title
  // - `closeButton`:  the dialog close button
  const [instance, attr] = useA11yDialog({
    id: "app-dialog",
    role: "dialog",
    title: `${modalData.title}`,
  });

  const dialog = createPortal(
    <div {...attr.container} className="dialog-container">
      <div {...attr.overlay} className="dialog-overlay" />
      <div {...attr.dialog} className="dialog-content">
        <header>
          <h2 {...attr.title} className="dialog-title">
            {modalData.title}
          </h2>
          <button
            className="btn dialog-close"
            data-a11y-dialog-hide
            aria-label="Close dialog"
          >
            <XIcon className="icons icon-xs" />
          </button>
        </header>
        {modalData.body}
      </div>
    </div>,
    document.body,
  );

  return (
    <>
      {buttonLayout(() => instance.show())}
      {dialog}
    </>
  );
};

export default Dialog;
