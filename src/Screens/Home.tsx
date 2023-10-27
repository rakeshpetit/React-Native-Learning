import * as React from "react";
import { View, Text, Image, Button } from "react-native";
import { styles } from "./styles";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorld}>Hello World!</Text>
      <Text>A second text</Text>
      <Image
        source={{
          uri: "https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png",
        }}
        style={styles.catImage}
      />
      <Button
        title="To Dog"
        onPress={() => {
          navigation.navigate("Dog");
        }}
      />
    </View>
  );
}

export default HomeScreen;
