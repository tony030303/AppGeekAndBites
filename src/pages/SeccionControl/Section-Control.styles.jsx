import { StyleSheet } from "react-native";

// Estilos centralizados con StyleSheet
export const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "black",
  },
  container: {
    flex: 1,
  },
  texto: {
    marginBottom: 20,
    marginTop: 10,
    fontSize: 16,
    textAlign: "center",
    color: "rgb(255, 255, 255)",
    backgroundColor: "black",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "rgb(255, 255, 255)",
    borderWidth: 0.5,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "rgb(0, 0, 0)",
    color: "rgb(94, 255, 0)",
  },
  error: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
    backgroundColor: "rgb(0, 0, 0)",
  },
});
