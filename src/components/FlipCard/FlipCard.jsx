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

//En este componente se representa la parte frontal de la tarjeta
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

//En este, la parte trasera de la tarjeta
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

//Componente principal, combina ambas caras, al permitir dar vuelta la tarjeta
const FlipCard = ({
  item, //datos del item de contacto / comida
  mostrar, 
  frente = frenteDefault({ mostrarImagen: mostrar, item: item }),
  atras = atrasDefault({ mostrarImagen: mostrar, item: item }),
  ...props
}) => {
  const [volteado, setVolteado] = useState(false); //estado para saber si la tarjeta esta volteada
  const animacionVoltear = useRef(new Animated.Value(0)).current; //valor animado para la rotación

  //Animación para la parte frontal de la tarjeta
  const frenteInterpolado = animacionVoltear.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"], //De 0° a 180°
  });


  const VoltearAFrenteEstilizado = {
    transform: [{ rotateY: frenteInterpolado }], //aplica la transformación de rotación en Y
  };

  //Animación para la parte trasera de la tarjeta
  const atrasInterpolado = animacionVoltear.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"], //Rota 180° 
  });

  const VoltearAAtrasEstilizado = {
    transform: [{ rotateY: atrasInterpolado }],
  };

  //En esta función se maneja la animación al tocar la tarjeta
  const voltearCarta = () => {
    if (volteado) {
      // Si la tarjeta está volteada, animación de la parte trasera a la de adelante
      Animated.spring(animacionVoltear, {
        toValue: 0, //vuelve asl estado inicial (0°)
        friction: 8, //control de la resistencia del rebote (+ alto = animación + suave)
        tension: 10, //control de la velocidad inicial de la animación
        useNativeDriver: false, //No usa el driver nativo (no soporta en rotateY)
      }).start();
    } else {
      // Sino, animación de la parte frontal a la trasera
      Animated.spring(animacionVoltear, {
        toValue: 180, //gira hasta 180°q 
        friction: 8,
        tension: 10,
        useNativeDriver: false,
      }).start();
    }
    setVolteado(!volteado); //como hubo un cambio en la carta, setteo el nuevo estado
  };

  // Combinar estilos base con estilos personalizados
  const cartaContenedorEstilo = StyleSheet.flatten([
    styles.cartaContenedor,
    props.style, // Estilos personalizados pasados como props
  ]);

  return (
    <View style={styles.container}>
      {/* TouchableWithoutFeedback nos ayuda a detectar los toques y poder ver la animación*/}
      <TouchableWithoutFeedback onPress={voltearCarta}>
        <View style={cartaContenedorEstilo} {...props}>
          {/* Vista animada para la parte frontal*/}
          <Animated.View
            style={[styles.front, styles.card, VoltearAFrenteEstilizado]}
          >
            {frente}
          </Animated.View>
          {/* Vista animada para la parte trasera*/}
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

export default FlipCard; //Exportación
