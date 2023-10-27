import * as React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { countryStyles as styles } from "./styles";
import { useGetCountriesQuery } from "../api";
import { useAppDispatch } from "../store/hooks";
import { selectCountry } from "../store/slices/selection";

function CountryList({ navigation }) {
  const { data, isLoading, error } = useGetCountriesQuery();
  const dispatch = useAppDispatch();

  if (isLoading) return <Text>Loading...</Text>;
  else if (error) return <Text>Error</Text>;

  console.log(data.data);

  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={({ item, index }) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Button
              title={item.country}
              onPress={() => {
                dispatch(selectCountry(item.country));
                navigation.goBack();
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default CountryList;
