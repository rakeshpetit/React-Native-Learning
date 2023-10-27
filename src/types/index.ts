type CountryAPI = {
  status: string;
  data: Country[];
};

type Country = {
  country: string;
};

export type { CountryAPI, Country };
