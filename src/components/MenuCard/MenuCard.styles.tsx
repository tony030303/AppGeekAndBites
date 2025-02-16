import { StyleSheet } from "react-native";

const styleMenuCard = StyleSheet.create({
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

export default styleMenuCard;
