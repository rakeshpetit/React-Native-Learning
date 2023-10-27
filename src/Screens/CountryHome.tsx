import * as React from "react";
import { View, Text, Image } from "react-native";
import { countryStyles as styles } from "./styles";
import { useGetCountriesQuery } from "../api";

function CountryHome() {
  const { data, isLoading, error } = useGetCountriesQuery();

  if (isLoading) return <Text>Loading...</Text>;
  else if (error) return <Text>Error</Text>;

  console.log(data.data);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Countries</Text>
      <Text>Pick a Country</Text>
    </View>
  );
}

export default CountryHome;
