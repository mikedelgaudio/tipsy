import { MutableRefObject } from "react";
import { toast } from "react-toastify";

// Use this for the error boundary
export const errorToast = (
  toastId: MutableRefObject<any>,
  msg = "",
  autoClose = false,
) => {
  toastId.current = toast.error(msg || "Unexpected error occurred.", {
    position: "top-right",
    autoClose: autoClose ? 5000 : false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: toastId.current,
  });
  return toastId;
};

export const warnToast = (toastId: MutableRefObject<any>, msg = "") => {
  toastId.current = toast.warn(msg || "Unexpected warning occurred.", {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: toastId.current,
  });
  return toastId;
};

export const successToast = (toastId: MutableRefObject<any>, msg = "") => {
  toastId.current = toast.success(msg || "Action successful.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    toastId: toastId.current,
  });
  return toastId;
};

export const dismissToast = (toastId: MutableRefObject<any>) => {
  if (!toastId.current) return;
  toast.dismiss(toastId.current);
};

export const dismissAllToast = () => {
  toast.dismiss();
};
