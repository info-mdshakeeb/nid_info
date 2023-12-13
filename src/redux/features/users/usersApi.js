import { api } from "../../api/apiSlice";


const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (data) => ({
        url: `/users?${data}`,
      }),
    }),
    getQueries: builder.query({
      query: (data) => ({
        url: `/areas?id=${data}`,
      })
    }),

  })
})
export const {
  useGetUsersQuery,
  useGetQueriesQuery,
} = usersApi