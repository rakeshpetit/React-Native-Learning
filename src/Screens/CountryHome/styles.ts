import { StyleSheet } from "react-native";

export const countryStyles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "white",
    justifyContent: "center",
  },
  chooseCityContainer: {
    alignItems: "center",
    marginVertical: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});

export const pickCountryStyles = StyleSheet.create({
  container: {
    flex: 0,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
