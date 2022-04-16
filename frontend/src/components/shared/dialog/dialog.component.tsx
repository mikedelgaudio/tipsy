import { observer } from "mobx-react-lite";
import { XIcon } from "../icons";
import "./dialog.component.css";

interface DialogData {
  title: string;
  body: JSX.Element;
}

const Dialog = observer(({ data }: { data: DialogData }) => {
  return (
    <dialog className="dialog-container" id="dialog">
      <div className="dialog-content">
        <header>
          <h2 className="dialog-title">{data.title}</h2>
          <button
            className="btn dialog-close"
            data-a11y-dialog-hide
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
