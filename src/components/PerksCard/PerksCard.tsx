import { Dimensions, View } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  SharedValue,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import perksCardstyles from "./PerksCard.styles";

interface PerksProps {
  ruta: any;
  index: number;
  translateX: SharedValue<number>;
}

const { height, width } = Dimensions.get("window");

const SIZE = width * 0.95;

const PerksCard: React.FC<PerksProps> = ({ index, ruta, translateX }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];

  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      inputRange,
      [0, 1, 0],
      Extrapolation.CLAMP //En caso de extrapolarse
    );

    return {
      transform: [{ scale }],
    };
  });

  return (
    <View style={perksCardstyles.pageContainer}>
      <Animated.View style={[perksCardstyles.perkContainer, rStyle]}>
        <Animated.Image source={ruta} style={[rStyle, perksCardstyles.image]} />
      </Animated.View>
    </View>
  );
};

export { PerksCard };
