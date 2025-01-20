import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Svg, { Defs, ClipPath, Rect, Use } from 'react-native-svg';

// Gallery
const mockUp = require('../assets/PerkCans/lata.png');
const tag = require('../assets/PerkCans/10-perk.webp');

export default function LaTag() {
  return (
    <View style={styles.container}>
      {/* Contenedor SVG para la máscara */}
      <Svg height="200" width="200" style={styles.svgContainer}>
        <Defs>
          {/* Definir la máscara en base a un ClipPath */}
          <ClipPath id="mask">
            {/* Usar una forma en la que aplicar la máscara */}
            <Rect width="200" height="200" />
          </ClipPath>
        </Defs>

        {/* Imagen que será recortada por la máscara */}
        <Use href="#mask" x="0" y="0">
          <Image
            href={mockUp} // Imagen como fondo
            width="200"
            height="200"
            preserveAspectRatio="xMidYMid slice"
          />
        </Use>
      </Svg>

      {/* Imagen que se recorta sobre la forma de la lata */}
      <Image source={tag} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  svgContainer: {
    position: 'absolute',
  },
  image: {
    width: 200,
    height: 200,
    position: 'absolute',
  },
});
