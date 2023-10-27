import * as React from "react";
import { View, Text, Button } from "react-native";
import { useAppSelector } from "../../store/hooks";

function PickCountry({ navigation }) {
  const country = useAppSelector((state) => state.selection.country);
  return (
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
        title={country || "Select country"}
        onPress={() => navigation.navigate("CountryList")}
      />
    </View>
  );
}

export default PickCountry;
