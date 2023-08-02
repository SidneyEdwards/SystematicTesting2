import { configureStore } from "@reduxjs/toolkit";
import goalsReducer from "components/slices/GoalsSlice";
import userReducer from "components/slices/UserSlice";

export default configureStore({
  reducer: {
    goals: goalsReducer,
    user: userReducer,
  },
});