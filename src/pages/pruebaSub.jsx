import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import SubscriberForm from "../components/SubscriberForm/SubscriberForm";
import { getSubscribers, addSubscriber } from "../services/subscriberService";

//componente principal que muestra la lista de suscriptores y permite agregar nuevos
export default function Home() {
  const [subscribers, setSubscribers] = useState([]); //lista de suscriptores
  const [modalVisible, setModalVisible] = useState(false); //contrala para ver si el modal esta abierto o cerrado

  // Cargar suscriptores desde el archivo JSON al iniciar
  useEffect(() => {
    loadSubscribers();
  }, []);

  // Carga los suscriptores al iniciar el componente.

  const loadSubscribers = async () => {
    const data = await getSubscribers();
    setSubscribers(data);
  };

  // Agregar un nuevo suscriptor
  const handleAddSubscriber = async (newSubscriber) => {
    const updatedList = await addSubscriber(newSubscriber);
    setSubscribers(updatedList);
    setModalVisible(false); // Cerrar el modal
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suscriptores</Text>
      {/* Lista de suscriptores */}
      <FlatList
        data={subscribers}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.subscriberItem}>
            <Text style={styles.subscriberText}>{item.name}</Text>
            <Text style={styles.subscriberText}>{item.email}</Text>
          </View>
        )}
        onEndReached={() => {
          // Lógica para cargar más datos si es necesario
        }}
        onEndReachedThreshold={0.5}
      />

      {/* Botón para abrir el formulario */}
      <TouchableOpacity
        style={styles.subscribeButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Suscribirse</Text>
      </TouchableOpacity>

      {/* Modal para el formulario de suscripción */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <SubscriberForm
          onAddSubscriber={handleAddSubscriber}
          onClose={() => setModalVisible(false)}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
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
