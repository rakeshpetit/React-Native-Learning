import * as React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./Screens/Home";
import DogScreen from "./Screens/Dog";
import CountryHome from "./Screens/CountryHome";
import { store } from "./store";

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <Provider store={store}>
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
          <Stack.Screen
            name="CountryHome"
            component={CountryHome}
            options={{
              title: "To Countries",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Navigation;
