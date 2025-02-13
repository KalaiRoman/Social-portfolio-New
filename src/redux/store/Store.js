import { configureStore } from "@reduxjs/toolkit";
import { reducerIndex } from "../reducerindex";
const Store = configureStore({
  reducer: reducerIndex,
});

export default Store;
