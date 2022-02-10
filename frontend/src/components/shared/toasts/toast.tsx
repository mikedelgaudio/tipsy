import { toast } from "react-toastify";

// Use this for the error boundary
export const notifyError = (msg: string = "") =>
  toast.error(msg || "Unexpected error occurred.");
