import { toast } from "react-toastify";

// Use this for the error boundary
export const errorToast = (msg: string = "") => {
  toast.error(msg || "Unexpected error occurred.", {
    position: "top-right",
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

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

export const dismissToast = () => {
  toast.dismiss();
};
