import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

// TAG
const RotarView = (props) => {
  const rotar = useRef(new Animated.Value(0)).current; // Initial value for rotation: 0

  useEffect(() => {
    // Usamos Animated.loop para hacer que la animación sea infinita
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotar, {
          toValue: 1, // Final rotation value (360 degrees)
          duration: 750, // Duration of one complete rotation
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(rotar, {
          toValue: 0, // Final rotation value (360 degrees)
          duration: 750, // Duration of one complete rotation
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
    ).start(); // Comienza la animación
  }, [rotar]);
  // Interpolamos el valor de rotación para que sea de 0 a 360 grados
  const rotateInterpolate = rotar.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"], // Convertimos el valor numérico a grados
  });
  console.log("Realizando rotacion");
  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [{ rotateY: rotateInterpolate }], // Aplicamos la rotación interpolada
      }}
    >
      {props.children}
    </Animated.View>
  );
};

export default RotarView;
