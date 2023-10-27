import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  helloWorld: {
    color: "red",
    fontSize: 40,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  catImage: { width: 200, height: 200 },
});

export const countryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
