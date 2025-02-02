import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

// componente que representa el formulario para agregar un nuevo suscriptor
// recibe dos props:
//  onAddSubscriber: función para manejar el agregado de un nuevo suscriptor
//  onClose: Ffnción para cerrar el formulario

export default function SubscriberForm({ onAddSubscriber, onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Valida los campos y llama a la función para agregar el suscriptor.

  const handleSubmit = () => {
    if (!name || !email) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    onAddSubscriber({ name, email });
  };

  return (
    <View style={styles.modalContainer}>
      <View style={styles.form}>
        <Text style={styles.label}>Nombre de Suscriptor</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
