import * as React from "react";
import { View, Text, Image } from "react-native";
import { countryStyles as styles } from "./styles";
import { useGetCountriesQuery } from "../api";

function CountryHome() {
  const { data, isLoading, isError } = useGetCountriesQuery();

  if (isLoading) return <Text>Loading...</Text>;
  else if (isError) return <Text>Error</Text>;

  console.log(data.data);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Countries</Text>
      <Text>Pick a Country</Text>
      <Text>{data.data[1].country}</Text>
    </View>
  );
}

export default CountryHome;
