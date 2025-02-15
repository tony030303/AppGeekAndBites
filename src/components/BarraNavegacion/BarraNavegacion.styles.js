import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgb(0, 0, 0)",
  },
  imagen: {
    width: 70,
    height: 70,
    contentFit: "contain",
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
    color: "#FFFFFF",
    padding: 0,
    textAlign: "center",
    fontFamily: "comic",
  },
});
