import { api } from "@/redux/api/apiSlice";


const mapSlice = api.injectEndpoints({
  endpoints: (builder) => ({
    getMap: builder.query({
      query: () => "/unions-with-locations",
    }),
  }),
});

export const { useGetMapQuery } = mapSlice;