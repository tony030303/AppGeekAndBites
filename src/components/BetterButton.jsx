import React from "react";
import { Pressable, Text, ImageBackground, StyleSheet } from "react-native";

const BetterButton = ({
  title,
  backgroundColor,
  borderColor,
  textColor,
  fontFamily,
  imageBackground,
  style,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, { backgroundColor, borderColor }, style]}
    >
      {imageBackground ? (
        <ImageBackground
          source={imageBackground}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <Text style={[styles.text, { color: textColor, fontFamily }]}>
            {title}
          </Text>
        </ImageBackground>
      ) : (
        <Text style={[styles.text, { color: textColor, fontFamily }]}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    borderRadius: 8,
  },
});

export default BetterButton;
