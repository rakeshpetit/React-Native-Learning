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

export type { CountryAPI, Country, StateAPI, State };
