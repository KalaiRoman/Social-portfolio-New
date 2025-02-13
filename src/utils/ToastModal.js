import toast from "react-hot-toast";

// success
const ToastSuccess = (params) => {
  return toast.success(params);
};

// error
const ToastError = (params) => {
  return toast.error(params);
};

export { ToastSuccess, ToastError };
