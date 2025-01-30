import { View, Text, StyleSheet } from "react-native";
import FlipCard from "./FlipCard";
import React from "react";
export default function Prueba(){
  return (
    <FlipCard
      frente={
        <View>
          <Text>Hola</Text>
        </View>
      }
      atras={
        <View>
          <Text>Chau</Text>
        </View>
      }

      style={{}}
    />
  );
}
