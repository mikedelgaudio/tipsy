import { MutableRefObject } from "react";
import { toast } from "react-toastify";

// Use this for the error boundary
export const errorToast = (toastId: MutableRefObject<any>, msg = "") => {
  toastId.current = toast.error(msg || "Unexpected error occurred.", {
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

export const dismissToast = (toastId: MutableRefObject<any>) => {
  if (!toastId.current) return;
  toast.dismiss(toastId.current);
};
