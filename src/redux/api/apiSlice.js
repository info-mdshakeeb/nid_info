import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://2ad9-103-86-108-68.ngrok.io/api/",
  }),
  tagTypes: ["Categories"],
  endpoints: () => ({})
})
