import * as React from "react";
import { View, Text, FlatList, Button } from "react-native";
import { countryStyles as styles } from "../styles";
import { useGetCountriesQuery, useGetStatesQuery } from "../../api";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectCountry, selectState } from "../../store/slices/selection";

function StateList({ navigation }) {
  const country = useAppSelector((state) => state.selection.country);
  if (!country) {
    return <Text>Country not selected</Text>;
  }
  const { data, isLoading, error } = useGetStatesQuery(country);
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
              title={item.state}
              onPress={() => {
                dispatch(selectState(item.state));
                navigation.goBack();
              }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default StateList;
