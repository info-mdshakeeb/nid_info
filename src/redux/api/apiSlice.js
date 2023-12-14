import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      // "https://23c8-27-147-163-201.ngrok.io/api/"
      "http://192.168.1.238:8004/api/",
  }),
  tagTypes: ["Categories"],
  endpoints: () => ({})
})
