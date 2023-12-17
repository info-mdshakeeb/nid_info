import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import usersSlice from "./features/users/usersSlice";
import querySlice from "@/redux/features/query/querySlice";
import authSlice from "@/redux/features/auth/authSlice";
import modalSlices from "@/redux/features/modals/modalSlices";


export const store = configureStore({
  reducer: {
    modal: modalSlices,
    auth: authSlice,
    query: querySlice,
    users: usersSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),

})
setupListeners(store.dispatch)