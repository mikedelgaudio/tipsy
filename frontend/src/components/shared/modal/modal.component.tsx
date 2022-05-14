import { useA11yDialog } from "react-a11y-dialog";
import { createPortal } from "react-dom";
import "./modal.component.css";

const Modal = ({ buttonLayout, modalData }: any) => {
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

  const modal = createPortal(
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
            <svg
              className="icons icon-xs"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06a31.894 31.894 0 0 1-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1 56.6 467.6c-6.328 7.594-15.42 11.52-24.59 11.52a31.907 31.907 0 0 1-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206 327.4 43.5c11.3-13.58 31.48-15.42 45.06-4.094 13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"
              />
            </svg>
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
      {modal}
    </>
  );
};

export { Modal };
