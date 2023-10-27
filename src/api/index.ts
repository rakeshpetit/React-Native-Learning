import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountryAPI } from "../types";

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
  }),
});

export const { useGetCountriesQuery } = airVisualApi;
