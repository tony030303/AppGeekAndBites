import React from "react";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import { PerksCard } from "../PerksCard/PerksCard";
import perks from "../../jsons/perks"; //importamos el archivo de perks
import SliderPerksStyles from "./SliderPerks.styles";

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
      style={SliderPerksStyles.container}
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
