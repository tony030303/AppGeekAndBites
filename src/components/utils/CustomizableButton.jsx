import React from "react";
import { Text, StyleSheet, TouchableOpacity as Button } from "react-native";

const CustomizableButton = ({
  title = "Presiona",
  onPress,
  style,
  textStyle,
}) => {
  return (
    <Button
      style={[styles.button, style]} // Aplicar estilos base y personalizados
      onPress={async () => {
        if (onPress) onPress();
      }}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    borderWidth: 2, // Ancho del borde
    borderColor: "red", // Color del borde (puedes cambiarlo desde afuera)
    borderRadius: 8, // Bordes redondeados
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default CustomizableButton;
