import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const questifyApi = createApi({
  reducerPath: "questify",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://questify.pl",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().authToken;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Cards", "Users"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `users`,
      providesTags: ["Users", "Cards"],
    }),

    registerUser: builder.mutation({
      query: (user) => ({
        // example user = {
        //  email: "example@mail.com",
        //  password: "examplepassword123"
        // }
        url: `users/signup`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users", "Cards"],
    }),

    loginUser: builder.mutation({
      query: (user) => ({
        url: `users/login`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users", "Cards"],
    }),

    logoutUser: builder.query({
      query: () => `users/logout`,
      providesTags: ["Users", "Cards"],
    }),

    getCurrentUser: builder.query({
      query: () => `users/current`,
      providesTags: ["Users", "Cards"],
    }),

  }),
});

const {
  useGetUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLazyLogoutUserQuery,
  useGetCurrentUserQuery,

} = questifyApi;

export {
  questifyApi,
  useGetUsersQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
  useLazyLogoutUserQuery,
  useGetCurrentUserQuery,
};