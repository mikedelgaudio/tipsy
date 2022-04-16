import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import { DialogData } from "../../../models/dialog.model";
import { XIcon } from "../icons";
import "./dialog.component.css";

const Dialog = observer(({ data }: { data: DialogData }) => {
  const dialogRef = useRef(null);
  const dialogNode = dialogRef.current;

  useEffect(() => {
    if (!dialogNode) return;
    if (data.open) {
      console.warn("EERs");
      dialogNode.showModal();
    } else {
      dialogNode.close();
    }
  }, [open]);

  return (
    <dialog ref={dialogRef} className="dialog-container" id="dialog">
      <div className="dialog-content">
        <header>
          <h2 className="dialog-title">{data.title}</h2>
          <button
            onClick={() => dialogNode.close()}
            className="btn dialog-close"
            aria-label="Close dialog"
          >
            <XIcon className="icons icon-xs" />
          </button>
        </header>
        {data.body}
      </div>
    </dialog>
  );
});

export { Dialog };
