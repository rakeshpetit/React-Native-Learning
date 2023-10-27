import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CityAPI, CountryAPI, StateAPI, WeatherAPI } from "../types";
import { API_KEY } from "../constants";

const baseUrl = "http://api.airvisual.com/";

type CityInputs = {
  country: string;
  state: string;
};

type WeatherInputs = CityInputs & {
  city: string;
};

export const airVisualApi = createApi({
  reducerPath: "airVisualApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  keepUnusedDataFor: 60 * 60 * 24,
  endpoints: (builder) => ({
    getCountries: builder.query<CountryAPI, void>({
      query: () => `v2/countries?key=${API_KEY}`,
    }),
    getStates: builder.query<StateAPI, string>({
      query: (country) => `v2/states?country=${country}&key=${API_KEY}`,
    }),
    getCities: builder.query<CityAPI, CityInputs>({
      query: ({ country, state }) =>
        `v2/cities?state=${state}&country=${country}&key=${API_KEY}`,
    }),
    getWeather: builder.query<WeatherAPI, WeatherInputs>({
      query: ({ country, state, city }) =>
        `v2/city?city=${city}&state=${state}&country=${country}&key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetCountriesQuery,
  useGetStatesQuery,
  useGetCitiesQuery,
  useGetWeatherQuery,
} = airVisualApi;
