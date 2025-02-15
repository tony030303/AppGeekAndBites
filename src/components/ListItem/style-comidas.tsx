import { StyleSheet, Dimensions } from "react-native";

const styleComidas = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    //backgroundColor: "black",
    marginTop: 10,
    marginBottom: 80,
    flexDirection: "row",
    justifyContent: "space-between",
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

export default styleComidas;
