export type DialogData = {
  title: string;
  body: JSX.Element;
  open: boolean;
};

export interface HTMLDialogElement extends HTMLElement {
  open: boolean;
  returnValue: string;
  show(): void;
  close(): void;
  showModal(): void;
}
