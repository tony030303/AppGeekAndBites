import { ImageBackground } from "expo-image";
import React, { useState, useRef } from "react";
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from "react-native";
import styles from "./style-flipcards";

const frenteDefault = ({ mostrarImagen, item }) => {
  return (
    <ImageBackground
      source={item.backgroundImage}
      style={styles.imagen}
      contentFit="cover"
    >
      <Text style={styles.text}> {mostrarImagen ? "" : item.title} </Text>
    </ImageBackground>
  );
};

const atrasDefault = ({ mostrarImagen, item }) => {
  return (
    <ImageBackground
      source={item.backgroundGif} //mostrarImagen ? item.backgroundImage : null
      style={[styles.imagen, styles.imagenBack]}
      contentFit="cover"
    >
      <Text style={styles.contentText}>{item.backContent}</Text>
    </ImageBackground>
  );
};

const FlipCard = ({
  item,
  mostrar,
  frente = frenteDefault({ mostrarImagen: mostrar, item: item }),
  atras = atrasDefault({ mostrarImagen: mostrar, item: item }),
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

export default FlipCard;
