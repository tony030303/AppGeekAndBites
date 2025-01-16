import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    scrollContainer: {
      flexGrow: 1,
      padding: 20,
      alignItems: 'center', // Centra el contenido horizontalmente
    },
    sectionContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent', // Asegura que sea transparente
    },
    text: {
      fontSize: 24,
      color: 'white', // Asegura que el texto sea visible sobre el fondo
      fontWeight: 'bold'
    },
    img: {
      width: 250,
      height: 250,
      borderRadius: 125, // Hacer la imagen redonda
    },


    containerCredito: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      padding: 10,
    },
    itemContainerCredito: {
      width: '45%', // Dos columnas con espacio entre ellas
      marginBottom: 20,
      alignItems: 'center',
    },
    imageCredito: {
      width: 150,
      height: 150,
      marginBottom: 5,
      resizeMode: 'cover',
      borderRadius: 100
    },
    nameCredito: {
      textAlign: 'center',
      color: 'white'
    },

  });
  
  export default style;