import { api } from "../../api/apiSlice";


const usersApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (data) => ({
        url: `/users?${data}`,
      }),
    }),
    getUserDetails: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'users', id }]
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
  useGetUserDetailsQuery
} = usersApi