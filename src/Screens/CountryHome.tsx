import * as React from "react";
import { View, Text, Image } from "react-native";
import { countryStyles as styles } from "./styles";

function CountryHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Countries</Text>
      <Text>Pick a Country</Text>
    </View>
  );
}

export default CountryHome;
