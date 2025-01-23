import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Voltear from "./FlipCard";

const App = () => {
  return (
    <View style={styles.container}>
      <Voltear
        frente={
          <View>
            <Text style={styles.text}>Front Side</Text>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.image}
            />
          </View>
        }
        atras={
          <View>
            <Text style={styles.text}>Back Side</Text>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.image}
            />
          </View>
        }
        style={{
          width: 250, // Ancho personalizado
          height: 150, // Alto personalizado
          margin: 20, // Margen personalizado
          backgroundColor: "lightgray", // Fondo personalizado
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
});

export default App;
