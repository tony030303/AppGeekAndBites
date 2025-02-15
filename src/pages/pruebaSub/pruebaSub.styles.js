import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    margin: 40,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 30,
  },
  title: {
    fontSize: 24,
    fontFamily: "monospace",
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
  },
  subscriberItem: {
    padding: 15,
    backgroundColor: "#309dfb",
    borderRadius: 5,
    marginBottom: 10,
  },
  subscriberText: {
    fontSize: 13,
    color: "#fff",
    fontFamily: "monospace",
  },
  subscribeButton: {
    backgroundColor: "#ffa123",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "monospace",
  },
});
