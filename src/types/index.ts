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

export type { CountryAPI, Country, StateAPI, State, CityAPI, City };
