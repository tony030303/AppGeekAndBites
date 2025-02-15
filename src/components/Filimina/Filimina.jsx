import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./Filimina.styles";

const Filimina = ({ children, imagen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image source={imagen} style={styles.image} loading="lazy" />
    </View>
  );
};

export default Filimina;
