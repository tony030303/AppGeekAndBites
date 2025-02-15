import React from "react";
import { Text, TouchableOpacity as Button } from "react-native";
import { styles } from "./CustomizableButton .styles.js";

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
export default CustomizableButton;
