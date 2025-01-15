import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Filimina = ({ children, imagen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image source={imagen} style={styles.image} loading='lazy' />
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(35, 31, 32, 0.7)',
    margin: 20
  },
  text: {
    color: 'white', // Asegura que el texto sea visible sobre el fondo
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default Filimina;


