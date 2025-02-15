import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 8,
  },
  img: {
    flex: 1,
    borderRadius: 12,
  },
  blur: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 1000,
  },
});
