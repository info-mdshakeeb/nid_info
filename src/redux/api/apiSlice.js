import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://c80c-27-147-163-201.ngrok-free.app/api",
    prepareHeaders: (headers, { getState }) => {
      headers.set("ngrok-skip-browser-warning", "no more")
      const token = getState().auth.accessToken

      if (token) {
        headers.set('authorization', `Bearer ${token}`)

      }
      return headers
    },
  }),
  endpoints: () => ({})
})
