import { Weather } from "./weather";

type CountryAPI = {
  status: string;
  data: Country[];
};

type Country = {
  country: string;
};

type StateAPI = {
  status: string;
  data: State[];
};

type State = {
  state: string;
};

type CityAPI = {
  status: string;
  data: City[];
};

type City = {
  city: string;
};

type WeatherAPI = {
  status: string;
  data: Weather;
};

export type { CountryAPI, Country, StateAPI, State, CityAPI, City, WeatherAPI };
