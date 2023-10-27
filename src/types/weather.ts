export interface Weather {
  city: string;
  state: string;
  country: string;
  location: Location;
  forecasts: Forecast[];
  current: Current;
  history: History;
}

export interface Location {
  type: string;
  coordinates: number[];
}

export interface Forecast {
  ts: string;
  aqius: number;
  aqicn: number;
  tp: number;
  tp_min: number;
  pr: number;
  hu: number;
  ws: number;
  wd: number;
  ic: string;
}

export interface Current {
  weather: Weather;
  pollution: Pollution;
}

export interface Weather {
  ts: string;
  tp: number;
  pr: number;
  hu: number;
  ws: number;
  wd: number;
  ic: string;
}

export interface Pollution {
  ts: string;
  aqius: number;
  mainus: string;
  aqicn: number;
  maincn: string;
  p2: P2;
  p1: P1;
  o3: O3;
  n2: N2;
  co: Co;
}

export interface P2 {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface P1 {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface O3 {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface N2 {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface Co {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface History {
  weather: Weather2[];
  pollution: Pollution2[];
}

export interface Weather2 {
  ts: string;
  tp: number;
  pr: number;
  hu: number;
  ws: number;
  wd: number;
  ic: string;
}

export interface Pollution2 {
  ts: string;
  aqius: number;
  mainus: string;
  aqicn: number;
  maincn: string;
  p2: P22;
  p1?: P12;
  o3: O32;
  n2: N22;
  co: Co2;
}

export interface P22 {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface P12 {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface O32 {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface N22 {
  conc: number;
  aqius: number;
  aqicn: number;
}

export interface Co2 {
  conc: number;
  aqius: number;
  aqicn: number;
}
