import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CityAPI, CountryAPI, StateAPI } from "../types";

const baseUrl = "http://api.airvisual.com/";
const API_KEY = "YOUR_API_KEY";

const listCountries = `v2/countries?key=${API_KEY}`;

type CountryState = {
  country: string;
  state: string;
};

export const airVisualApi = createApi({
  reducerPath: "airVisualApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  keepUnusedDataFor: 60 * 60 * 24,
  endpoints: (builder) => ({
    getCountries: builder.query<CountryAPI, void>({
      query: () => listCountries,
    }),
    getStates: builder.query<StateAPI, string>({
      query: (country) => `v2/states?country=${country}&key=${API_KEY}`,
    }),
    getCities: builder.query<CityAPI, CountryState>({
      query: ({ country, state }) =>
        `v2/cities?state=${state}&country=${country}&key=${API_KEY}`,
    }),
  }),
});

export const { useGetCountriesQuery, useGetStatesQuery, useGetCitiesQuery } =
  airVisualApi;
