import * as React from "react";
import { View, Text, Image, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
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

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Cat Home",
          }}
        />
        <Stack.Screen
          name="Dog"
          component={DogScreen}
          options={{
            title: "Dog Home",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
