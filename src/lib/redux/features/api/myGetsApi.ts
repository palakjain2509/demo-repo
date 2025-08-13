// src/lib/redux/features/api/myGetsApi.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const myGetsApi = createApi({
  reducerPath: "myGetsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.example.com/" }), // Replace with your actual API base URL
  endpoints: (builder) => ({
    // Example endpoint: get some data
    getExampleData: builder.query<{ message: string }, string>({
      query: (name) => `example/${name}`,
    }),
    // Example mutation: post some data
    // updateExampleData: builder.mutation<void, { id: string; data: any }>({
    //   query: ({ id, data }) => ({
    //     url: `example/${id}`,
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExampleDataQuery /*, useUpdateExampleDataMutation*/ } = myGetsApi;

