import React from "react";
import { Toaster } from "react-hot-toast";
function ToastProvider({ children }) {
  return (
    <div>
      <Toaster />
      {children}
    </div>
  );
}

export default ToastProvider;
