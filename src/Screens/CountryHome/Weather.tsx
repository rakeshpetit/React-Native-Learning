import { View, Text } from "react-native";
import React from "react";
import { City, Country, State } from "../../types";
import { useGetWeatherQuery } from "../../api";
import { weatherStyles as styles } from "./styles";

type Props = {
  country: Country["country"];
  state: State["state"];
  city: City["city"];
};

export default function Weather({ country, state, city }: Props) {
  if (!country || !state || !city) {
    return <Text>Weather not found</Text>;
  }
  const { data, isLoading, error } = useGetWeatherQuery({
    country,
    state,
    city,
  });

  if (isLoading) return <Text>Loading...</Text>;
  else if (error) return <Text>Error</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.weatherText}>
        {data.data.current.weather.tp} degree celsius
      </Text>
    </View>
  );
}
