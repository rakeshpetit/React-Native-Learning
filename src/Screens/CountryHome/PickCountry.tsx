import * as React from "react";
import { View, Text, Button } from "react-native";
import { pickCountryStyles as styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Country } from "../../types";

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
  country: Country["country"];
};

function PickCountry({ navigation, country }: Props) {
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
