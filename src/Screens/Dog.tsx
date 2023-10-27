import * as React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./styles";

function DogScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorld}>Woof woof</Text>
      <Text>I'm a dog</Text>
      <Image
        source={{
          uri: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
        }}
        style={styles.catImage}
      />
    </View>
  );
}

export default DogScreen;
