import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import buttonSlice from "./buttonSlice";
const store = configureStore({
   //storing multiple slices in object
    reducer: {
      counter: counterSlice,
      buttons: buttonSlice
    }
  });
  
  export default store;