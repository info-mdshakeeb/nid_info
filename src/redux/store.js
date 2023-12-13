import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api/apiSlice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import usersSlice from "./features/users/usersSlice";
import querySlice from "@/redux/features/query/querySlice";


export const store = configureStore({
  reducer: {
    query: querySlice,
    users: usersSlice,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),

})
setupListeners(store.dispatch)