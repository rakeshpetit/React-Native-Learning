import * as React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { countryStyles as styles } from "../styles";
import { useGetCitiesQuery } from "../../api";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectCity } from "../../store/slices/selection";

function CityList({ navigation }) {
  const country = useAppSelector((state) => state.selection.country);
  const state = useAppSelector((state) => state.selection.state);
  if (!country || !state) {
    return <Text>Country or State not selected</Text>;
  }
  const { data, isLoading, error } = useGetCitiesQuery({ country, state });
  const dispatch = useAppDispatch();

  if (isLoading) return <Text>Loading...</Text>;
  else if (error) return <Text>Error</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.listContainer}>
            <Button
              title={item.city}
              onPress={() => {
                dispatch(selectCity(item.city));
                navigation.goBack();
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default CityList;
