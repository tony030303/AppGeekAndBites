import { StyleSheet } from "react-native";
import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { Page } from "../components/Page";

import perks from "../jsons/perks"; //importamos el archivo de perks

/*
const WORDS = ["", "", "", ""];
*/
//pueden colocarse aca las rutas para cada una de las etiquetas

// const RUTAS = ["perk_01.png", "perk_02.png", "perk_03.png", "perk_04.png"];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const Prueba = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
    //console.log(translateX.value);
  });

  return (
    <Animated.ScrollView
      //pagingEnabled //Puede omitirse y no muestra efecto paginacion
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      horizontal
      style={styles.container}
    >
      {perks.map((lata, index) => {
        return (
          <Page
            key={index.toString()}
            ruta={lata.image}
            index={index}
            translateX={translateX}
          />
        );
      })}
    </Animated.ScrollView>
  );
};

export default Prueba;
