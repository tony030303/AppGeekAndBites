import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Filimina = ({ children, imagen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image source={typeof imagen === 'string' ? { uri: imagen } : imagen} style={styles.image} />
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
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
