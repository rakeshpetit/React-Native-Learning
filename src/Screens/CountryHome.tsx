import * as React from "react";
import { View, Text, Button } from "react-native";
import { countryStyles as styles } from "./styles";

function CountryHome({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text style={styles.label}>Choose your City</Text>
      </View>
      <View
        style={{
          flex: 0,
          paddingVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Text>Pick a Country</Text>
        <Button
          title="Albania"
          onPress={() => navigation.navigate("CountryList")}
        />
      </View>
    </View>
  );
}

export default CountryHome;
