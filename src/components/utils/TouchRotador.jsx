import React, { useEffect, useRef, useState } from "react";
import { Animated, Easing, TouchableOpacity } from "react-native";

// TAG
const RotarPressable = (props) => {
  const [animation, setAnimation] = useState(false);
  const rotar = useRef(new Animated.Value(0)).current; // Initial value for rotation: 0

  function toggleAnimation() {
    setAnimation(!animation);
  }

  useEffect(() => {
    if (animation) {
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
    } else {
      rotar.setValue(0);
    }
  }, [animation, rotar]);
  // Interpolamos el valor de rotación para que sea de 0 a 360 grados
  const rotateInterpolate = rotar.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "90deg"], // Convertimos el valor numérico a grados
  });

  const scaleInterpolate = rotar.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.2, 1], // Convertimos el valor numérico a grados
  });

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [
          { rotateY: rotateInterpolate },
          { scale: scaleInterpolate },
        ], // Aplicamos la rotación interpolada
      }}
    >
      <TouchableOpacity onPress={toggleAnimation}>
        {props.children}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default RotarPressable;
