import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountryAPI, StateAPI } from "../types";

const baseUrl = "http://api.airvisual.com/";
const API_KEY = "YOUR_API_KEY";

const listCountries = `v2/countries?key=${API_KEY}`;

export const airVisualApi = createApi({
  reducerPath: "airVisualApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({
    getCountries: builder.query<CountryAPI, void>({
      query: () => listCountries,
    }),
    getStates: builder.query<StateAPI, string>({
      query: (country) => `v2/states?country=${country}&key=${API_KEY}`,
    }),
  }),
});

export const { useGetCountriesQuery, useGetStatesQuery } = airVisualApi;
