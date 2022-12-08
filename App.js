import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./components/Home";
import { Platform } from "react-native";
import Header from "./components/Header";
const Stack = createStackNavigator();
import Footer from "./components/Footer";
import { NavigationReference } from "./components/RootNavigation";
import About from "./components/About";
import Quote from "./components/Quote";
import ToonDetail from "./components/ToonDetail";

export default function App() {
  return (
    <NavigationContainer
      ref={NavigationReference}
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 100,
      }}
    >
      <Stack.Navigator initialRouteName="Toons">
        <Stack.Screen
          name="Toons"
          component={Homepage}
          headerMode="screen"
          options={{
            header: () => <Header headerDisplay="Toons" />,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          headerMode="screen"
          options={{
            header: () => <Header headerDisplay="About" />,
          }}
        />
        <Stack.Screen
          name="Quote"
          component={Quote}
          headerMode="screen"
          options={{
            header: () => <Header headerDisplay="Quote" />,
          }}
        />
        <Stack.Screen
          name="ToonDetail"
          component={ToonDetail}
          options={{
            header: () => <Header headerDisplay="Toon Detail" />,
          }}
        />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
