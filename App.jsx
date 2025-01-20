import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// Import the TabNavigator
import BarraNavegacion from "./src/components/BarraNavegacion";

export default function App() {
  console.log("Funcionando! 🚀");
  const [fontLoad] = useFonts({
    comic: require("./src/assets/fonts/Rethogen Atomics.otf"),
  });

  if (!fontLoad) {
    return null; // O un indicador de carga
  }

  return (
    <>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <View style={style.backgroundContainer}>
            <BarraNavegacion />
          </View>
        </GestureHandlerRootView>
      </NavigationContainer>
    </>
  );
}

const style = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    position: "relative",
  },
});
