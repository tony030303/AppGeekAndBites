import {
  TouchableOpacity,
  View,
  Text,
  Animated,
  ImageBackground,
} from "react-native";
import React, { useState, useRef } from "react";
import * as Animatable from "react-native-animatable";
import styleComidas from "../styles/style-comidas";

//TODO: ELIMINAR

const ListItem = ({ item }) => {
  const animatedValue = useRef(new Animated.Value(0)).current; // Valor animado
  const [isFlipped, setIsFlipped] = useState(false);

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"], // Frente rota de 0° a 180°
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"], // Parte trasera rota de 180° a 360°
  });

  const flipCard = () => {
    // Detecta si la tarjeta está volteada y ajusta la animación

    Animated.spring(animatedValue, {
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true, // Mejora el rendimiento
    }).start();
    setIsFlipped(!isFlipped);
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <Animatable.View
      animation={"fadeInUp"}
      duration={1000}
      delay={item.index * 250}
    >
      <TouchableOpacity
        style={styleComidas.listItem}
        key={item.index}
        onPress={flipCard}
      >
        <Animated.View
          //Cara frontal
          style={[styleComidas.cardFront, frontAnimatedStyle]}
        >
          <View
            style={{
              //backgroundColor: "pink", //TODO:Sacar
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <ImageBackground
              source={item.backgroundImage}
              style={styleComidas.background}
              resizeMode="cover"
            >
              <Text style={styleComidas.name}> {item.title} </Text>
            </ImageBackground>
          </View>
        </Animated.View>

        <Animated.View
          //cara trasera
          style={[styleComidas.cardBack, backAnimatedStyle]}
        >
          <View style={styleComidas.detailsContainer}>
            <Text style={styleComidas.descripcion}> {item.backContent} </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

export default ListItem;
