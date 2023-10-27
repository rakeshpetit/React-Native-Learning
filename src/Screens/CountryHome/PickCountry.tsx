import * as React from "react";
import { View, Text, Button } from "react-native";
import { useAppSelector } from "../../store/hooks";
import { pickCountryStyles as styles } from "./styles";

function PickCountry({ navigation }) {
  const country = useAppSelector((state) => state.selection.country);
  return (
    <View style={styles.container}>
      <Text>Pick a Country</Text>
      <Button
        title={country || "Select country"}
        onPress={() => navigation.navigate("CountryList")}
      />
    </View>
  );
}

export default PickCountry;
