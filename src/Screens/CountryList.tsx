import * as React from "react";
import { View, Text, Image, FlatList, Button } from "react-native";
import { countryStyles as styles } from "./styles";
import { useGetCountriesQuery } from "../api";

function CountryList({ navigation }) {
  const { data, isLoading, error } = useGetCountriesQuery();

  if (isLoading) return <Text>Loading...</Text>;
  else if (error) return <Text>Error</Text>;

  console.log(data.data);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={({ item, index }) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Button title={item.country} onPress={() => navigation.goBack()} />
          </View>
        )}
      />
    </View>
  );
}

export default CountryList;
