import * as React from "react";
import { View, Text, Button } from "react-native";
import { pickCountryStyles as styles } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { State } from "../../types";

type Props = {
  navigation: NativeStackNavigationProp<any, any>;
  state: State["state"];
};

function PickState({ navigation, state }: Props) {
  return (
    <View style={styles.container}>
      <Text>Pick a State</Text>
      <Button
        title={state || "Select state"}
        onPress={() => navigation.navigate("StateList")}
      />
    </View>
  );
}

export default PickState;
