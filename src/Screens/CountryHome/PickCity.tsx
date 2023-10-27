import * as React from "react";
import { View, Text, Button } from "react-native";
import { pickCountryStyles as styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { City } from "../../types";

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
  city: City["city"];
};

function PickCity({ navigation, city }: Props) {
  return (
    <View style={styles.container}>
      <Text>Pick a City</Text>
      <Button
        title={city || "Select city"}
        onPress={() => navigation.navigate("CityList")}
      />
    </View>
  );
}

export default PickCity;
