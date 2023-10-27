import * as React from "react";
import { View, Text } from "react-native";
import { countryStyles as styles } from "./styles";
import PickCountry from "./PickCountry";
import { useAppSelector } from "../../store/hooks";
import PickState from "./PickState";

function CountryHome({ navigation }) {
  const country = useAppSelector((state) => state.selection.country);
  const state = useAppSelector((state) => state.selection.state);

  return (
    <View style={styles.container}>
      <View style={styles.chooseCityContainer}>
        <Text style={styles.label}>Choose your City</Text>
      </View>
      <PickCountry navigation={navigation} country={country} />
      {country && <PickState navigation={navigation} state={state} />}
    </View>
  );
}

export default CountryHome;
