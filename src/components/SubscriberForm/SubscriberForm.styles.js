import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  form: {
    width: "90%",
    padding: 20,
    backgroundColor: "#309dfb",
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#fff",
    fontWeight: "bold",
    fontFamily: "monospace",
  },
  input: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    fontFamily: "monospace",
  },
  submitButton: {
    backgroundColor: "#ffa123",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontFamily: "monospace",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 10,
    alignItems: "center",
  },
  cancelText: {
    color: "#fff",
    fontFamily: "monospace",
    fontSize: 16,
  },
});
