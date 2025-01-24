import React, { useState, useRef } from "react";
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from "react-native";

const frenteDefault = () => {
  return <Text style={styles.text}>Frente</Text>;
};

const atrasDefault = () => {
  return <Text style={styles.text}>Atras</Text>;
};

const FlipCard = ({
  frente = frenteDefault(),
  atras = atrasDefault(),
  ...props
}) => {
  const [volteado, setVolteado] = useState(false);
  const animacionVoltear = useRef(new Animated.Value(0)).current;

  const frenteInterpolado = animacionVoltear.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const VoltearAFrenteEstilizado = {
    transform: [{ rotateY: frenteInterpolado }],
  };

  const atrasInterpolado = animacionVoltear.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const VoltearAAtrasEstilizado = {
    transform: [{ rotateY: atrasInterpolado }],
  };

  const voltearCarta = () => {
    if (volteado) {
      // Animación de atrás a adelante
      Animated.spring(animacionVoltear, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      }).start();
    } else {
      // Animación de adelante a atrás
      Animated.spring(animacionVoltear, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      }).start();
    }
    setVolteado(!volteado);
  };

  // Combinar estilos base con estilos personalizados
  const cartaContenedorEstilo = StyleSheet.flatten([
    styles.cartaContenedor,
    props.style, // Estilos personalizados pasados como props
  ]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={voltearCarta}>
        <View style={cartaContenedorEstilo} {...props}>
          <Animated.View
            style={[styles.front, styles.card, VoltearAFrenteEstilizado]}
          >
            {frente}
          </Animated.View>
          <Animated.View
            style={[styles.back, styles.card, VoltearAAtrasEstilizado]}
          >
            {atras}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cartaContenedor: {
    width: 300, // Tamaño base
    height: 200, // Tamaño base
    position: "relative",
  },
  text: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  front: {
    backgroundColor: "red",
  },
  back: {
    backgroundColor: "blue",
  },
  card: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    position: "absolute",
    backfaceVisibility: "hidden",
  },
});

export default FlipCard;
