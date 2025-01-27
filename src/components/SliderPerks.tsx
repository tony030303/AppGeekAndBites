import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { PerksCard } from "../components/PerksCard";
import perks from "../jsons/perks"; //importamos el archivo de perks

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SliderPerks = () => {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
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
          <PerksCard
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

export default SliderPerks;
