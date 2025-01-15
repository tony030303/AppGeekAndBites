import React, { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

const logo = require('../assets/01-logo.jpeg');

// TAG
const RotarView = props => {
  const rotar = new Animated.Value(0); // Initial value for rotation: 0

  useEffect(() => {
    // Usamos Animated.loop para hacer que la animación sea infinita
    Animated.loop(
        Animated.sequence([

            
            Animated.timing(rotar, {
                toValue: 90, // Final rotation value (360 degrees)
                duration: 150, // Duration of one complete rotation
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(rotar, {
                toValue: 0, // Final rotation value (360 degrees)
                duration: 350, // Duration of one complete rotation
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ]
        )
    ).start(); // Comienza la animación
  }, []);

  // Interpolamos el valor de rotación para que sea de 0 a 360 grados
  const rotateInterpolate = rotar.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'], // Convertimos el valor numérico a grados
  });

  return (
    <Animated.View
      style={{
        ...props.style,
        transform: [{ rotateY: rotateInterpolate }], // Aplicamos la rotación interpolada
      }}>
      {props.children}
    </Animated.View>
  );
};