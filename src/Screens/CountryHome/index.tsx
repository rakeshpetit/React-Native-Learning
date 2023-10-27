import * as React from "react";
import { View, Text, Button } from "react-native";
import { countryStyles as styles } from "../styles";
import PickCountry from "./PickCountry";

function CountryHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text style={styles.label}>Choose your City</Text>
      </View>
      <PickCountry navigation={navigation} />
    </View>
  );
}

export default CountryHome;
