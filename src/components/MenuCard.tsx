import {
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { useFonts } from "expo-font";
import * as Animatable from "react-native-animatable";
import SliderPerks from "../components/SliderPerks";
import Animated from "react-native-reanimated";
import itemsComidas from "../jsons/itemsComidas";

const ListItem = ({ item, tarjetasVolteadas, voltearTarjeta }) => {
  return (
    <Animatable.View
      animation={"fadeInUp"}
      duration={1000}
      delay={item.index * 250}
    >
      <TouchableOpacity
        style={styles.listItem}
        key={item.index}
        onPress={() => voltearTarjeta(item.index)}
      >
        <View
          //Cara frontal
          style={[
            styles.image,
            styles.cardFront,
            {
              //transform nos sirve para aplicar transformaciones visuales, en mi caso, para rotar en el eje Y.
              //sabemos que tarjetasVolteadas es un booleano que indica si la tarjeta se volteó. Si está en true, entonces la tarjeta rota 180grados para mostrar la cara trasera de la tarjeta.
              transform: tarjetasVolteadas[item.index]
                ? [{ rotateY: "180deg" }]
                : [{ rotateY: "0deg" }],
            },
          ]}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.detailsContainer}>
              <Text style={styles.name}> {item.title} </Text>
            </View>
            <ImageBackground
              source={item.backgroundImage}
              style={styles.background}
              resizeMode="cover"
            />
          </View>
        </View>

        <View
          //cara trasera
          style={[
            styles.cardBack,
            {
              //idem que la parte frontal de la tarjeta, solo que acá pasaria de la parte trasera a la parte frontal
              transform: tarjetasVolteadas[item.index]
                ? [{ rotateY: "0deg" }]
                : [{ rotateY: "180deg" }],
            },
          ]}
        >
          <View>
            <View style={styles.detailsContainer}>
              <Text style={styles.descripcion}> {item.backContent} </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const MenuCard = () => {
  const [tarjetasVolteadas, setTarjetasVolteadas] = useState({});

  //voltearTarjeta: lo que hace es invertir el estado de volteo de una tarjeta específica.
  const voltearTarjeta = (index: number) => {
    //por una función que toma el estado anterior
    setTarjetasVolteadas((prevState) => ({
      ...prevState, //copia el estado actual
      [index]: !prevState[index], // Si está volteada, desvoltearla y viceversa, lo actualiza (true a false o viceversa)
    }));
  };

  const renderItem = ({ item }) => (
    <ListItem
      item={item}
      tarjetasVolteadas={tarjetasVolteadas}
      voltearTarjeta={voltearTarjeta}
    />
  );
  const ListEmptyComponent = () => {};

  return (
    <View style={[styles.container]}>
      <FlatList
        data={itemsComidas}
        keyExtractor={(_, i) => String(i)}
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        //PERKS
        ListFooterComponent={<SliderPerks />}
      />
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Asegura que el fondo ocupe todo el espacio disponible
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
  },
  container: {
    //backgroundColor: "black",
    marginTop: 50,
  },
  listItem: {
    height: 200,
    width: Dimensions.get("window").width / 2 - 16,
    backgroundColor: "white",
    borderWidth: 4, // Grosor del borde
    borderColor: "purple", // Color del borde
    margin: 8,
    perspective: "1000",
    //borderRadius: 10,
  },
  detailsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 5,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardBackBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Fondo semitransparente
    width: "100%",
    height: "100%",
  },
  cardFront: {
    //position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    backfaceVisibility: "hidden", // Oculta la parte trasera al rotar
    //transition: "transform 0.6s", // Añade transición suave
  },
  cardBack: {
    position: "absolute",
    width: "94%",
    height: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    margin: 5,
    backfaceVisibility: "hidden", // Oculta la parte trasera al rotar
    //transition: "transform 0.6s", // Añade transición suave
  },
  image: {
    height: "95%",
    margin: 5,
    //borderRadius: 10,
    //backgroundColor: "pink",
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  descripcion: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
  },
});
