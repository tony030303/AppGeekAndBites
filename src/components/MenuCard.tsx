import {
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  View,
  Text,
  Animated,
  ImageBackground,
} from "react-native";
import React, { useState, useRef } from "react";
import * as Animatable from "react-native-animatable";
import SliderPerks from "../components/SliderPerks";
import itemsComidas from "../jsons/itemsComidas";

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
        style={styles.listItem}
        key={item.index}
        onPress={flipCard}
      >
        <Animated.View
          //Cara frontal
          style={[styles.cardFront, frontAnimatedStyle]}
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
              style={styles.background}
              resizeMode="cover"
            >
              <Text style={styles.name}> {item.title} </Text>
            </ImageBackground>
          </View>
        </Animated.View>

        <Animated.View
          //cara trasera
          style={[styles.cardBack, backAnimatedStyle]}
        >
          <View style={styles.detailsContainer}>
            <Text style={styles.descripcion}> {item.backContent} </Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const MenuCard = () => {
  const renderItem = ({ item }) => <ListItem item={item} />;

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
        ListHeaderComponent={<Text style={styles.text}> Menu - Perks!</Text>}
        ListFooterComponent={<SliderPerks />}
      />
    </View>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  background: {
    flex: 1, // Asegura que el fondo ocupe todo el espacio disponible
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover", //cover
  },
  container: {
    //backgroundColor: "black",
    marginTop: 10,
  },
  listItem: {
    height: 200,
    width: Dimensions.get("window").width / 2 - 16,
    backgroundColor: "white",
    borderWidth: 4, // Grosor del borde
    borderColor: "purple", // Color del borde
    margin: 8,
    perspective: "1000",
    flex: 1,
    //borderRadius: 10,
  },
  detailsContainer: {
    //paddingHorizontal: 16, //TODO: Sacar
    //paddingVertical: 5, //TODO: Sacar
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    //backgroundColor: "blue", //TODO: Sacar
  },
  cardFront: {
    flex: 1,
    position: "absolute",
    height: "95%",
    width: "94%",
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    backfaceVisibility: "hidden", // Oculta la parte trasera al rotar
    //transition: "transform 0.6s", // Añade transición suave
  },
  cardBackBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.75)", // Fondo semitransparente
    width: "100%",
    height: "100%",
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
    transform: [{ rotateY: "180deg" }],
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
    fontSize: 20,
    color: "white",
    textAlign: "center",
    marginBottom: 150,
  },
  descripcion: {
    fontWeight: "bold",
    fontSize: 13,
    color: "#fff",
    textAlign: "center",
  },
  text: {
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    marginBottom: 20,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
    fontFamily: "comic",
  },
});
