import { Text, Image, useWindowDimensions, Dimensions } from "react-native";
import React from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";
import { styles } from "./BlurRotateListItem .styles";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const { width } = Dimensions.get("window");

const SIZE = width * 0.25;

export default function BlurRotateListItem({ item, index, viewables }) {
  const window = useWindowDimensions();

  const blurAnimatedProps = useAnimatedProps(() => {
    const isVisible = viewables.value.includes(index);
    return { intensity: withTiming(isVisible ? 0 : 20, { duration: 300 }) };
  });

  const style = useAnimatedStyle(() => {
    const isVisible = viewables.value.includes(index);

    return {
      transform: [
        { scale: withTiming(isVisible ? 1 : 0.8, { duration: 300 }) },
      ],
    };
  }, [viewables]);

  return (
    <>
      <Animated.View
        style={[styles.container, { maxWidth: (window.width - 48) / 2 }, style]}
      >
        <Image
          style={[styles.img, { height: SIZE, width: SIZE }]}
          source={item.image}
        />
        <Text style={{ fontWeight: "700" }}>{item.title}</Text>
      </Animated.View>
      <AnimatedBlurView style={styles.blur} animatedProps={blurAnimatedProps} />
    </>
  );
}
