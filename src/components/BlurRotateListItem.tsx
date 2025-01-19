import {
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import React from "react";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { BlurView } from "expo-blur";

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const { height, width } = Dimensions.get("window");

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
        <Image style={styles.img} source={item.image} />
        <Text style={{ fontWeight: "700" }}>{item.title}</Text>
      </Animated.View>
      <AnimatedBlurView style={styles.blur} animatedProps={blurAnimatedProps} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  img: {
    flex: 1,
    height: SIZE,
    width: SIZE,
    borderRadius: 12,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
});
