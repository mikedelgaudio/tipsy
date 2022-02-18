import { toast } from "react-toastify";

// Use this for the error boundary
export const errorToast5ms = (msg: string = "") =>
  toast.error(msg || "Unexpected error occurred.");

export const warnToast = (msg: string = "") => {
  toast.warn(msg || "Unexpected warning occurred.", {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const dismissAllToast = () => toast.dismiss();
