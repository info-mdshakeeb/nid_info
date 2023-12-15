import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://f17e-113-212-111-86.ngrok-free.app/api/",
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
