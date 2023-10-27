import * as React from "react";
import { View, Text } from "react-native";
import { countryStyles as styles } from "./styles";
import PickCountry from "./PickCountry";
import { useAppSelector } from "../../store/hooks";
import PickState from "./PickState";
import PickCity from "./PickCity";
import Weather from "./Weather";

function CountryHome({ navigation }) {
  const country = useAppSelector((state) => state.selection.country);
  const state = useAppSelector((state) => state.selection.state);
  const city = useAppSelector((state) => state.selection.city);

  return (
    <View style={styles.container}>
      <View style={styles.chooseCityContainer}>
        <Text style={styles.label}>Choose your City</Text>
      </View>
      <PickCountry navigation={navigation} country={country} />
      {country && <PickState navigation={navigation} state={state} />}
      {country && state && <PickCity navigation={navigation} city={city} />}
      {country && state && city && (
        <Weather country={country} state={state} city={city} />
      )}
    </View>
  );
}

export default CountryHome;
