import React from "react";
import { BrowserRouter } from "react-router-dom";

function BrowserRouters({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default BrowserRouters;
