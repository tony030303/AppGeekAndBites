import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from "./SubscriberForm.styles";

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
