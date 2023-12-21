import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://18.143.17.23:7000/api",
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
