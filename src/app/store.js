import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/reducers";
import { toDoReducer } from "../features/toDoTasks/ToDoSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    toDos: toDoReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
