import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgb(0,0,0)",
  },
  imageInput: {
    width: 200,
    height: 50,
    backgroundColor: "black",
    borderColor: "lime",
    borderWidth: 0.5,
    color: "white",
    margin: 10,
  },
  textInput: {
    margin: 10,
    height: 40,
    width: 300,
    borderColor: "lime",
    borderWidth: 0.5,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "rgb(0, 0, 0)",
    color: "rgb(94, 255, 0)",
  },
  button: {
    marginVertical: 10,
    width: "100%",
    borderRadius: 20,
    backgroundColor: "black",
    borderColor: "lime",
    borderWidth: 0.5,
  },
});
