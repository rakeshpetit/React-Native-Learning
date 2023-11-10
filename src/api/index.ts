import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CountryAPI } from "../types";

const baseUrl = "http://api.airvisual.com/";
const apiKey = "e1964b66-4708-43ce-99c9-0da951562e47";

export const airVisualApi = createApi({
  reducerPath: "airVisualApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCountries: builder.query<CountryAPI, void>({
      query: () => `v2/countries?key=${apiKey}`,
    }),
  }),
});

export const { useGetCountriesQuery } = airVisualApi;
