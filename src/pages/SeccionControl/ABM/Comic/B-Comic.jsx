import { useState, useEffect } from "react";
import { Modal, TextInput, StyleSheet, Text } from "react-native";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton";
import SoundButton from "../../../../components/SoundButton";

import eliminate from "../../../../assets/sounds/sfx-eliminate.mp3";

const Formulario_Comic_B = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [id, setId] = useState("");


  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      setId(""); // Resetear formulario      
    };
    //lo que estaba
    setIsVisible(visible);
  }, [visible]);

  const verificarComic = () => {
    if (!id.trim()) {
      alert("Por favor, completa todos los campos!!!!!");
      return;
    }
    console.log("Comic eliminado con id: ", id);
  };

  return (
    <Modal visible={isVisible} animationType={"fade"}>
      <View style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <Text style={{ color: "white", marginLeft: 10 }}>ID del Comic</Text>
          <TextInput
            style={styles.textInput}
            value={id}
            onChangeText={setId}
            placeholder="id del Comic"
            placeholderTextColor={"gray"}
          />
        </View>

        <CustomizableButton
          title="Eliminar"
          onPress={verificarComic}
          style={styles.button}
        />

        <SoundButton
          title="Cancelar"
          onPress={onClose}
          style={styles.button}
          sfx={eliminate}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgb(0,0,0)",
  },
  imageInput: {
    width: 200, // 🔥 Cambia el ancho
    height: 50, // 🔥 Cambia el alto
    backgroundColor: "black", // 🔥 Color de fondo
    borderColor: "lime", // 🔥 Color del borde
    borderWidth: 0.5, // 🔥 Grosor del borde
    color: "white", // 🔥 Color del texto
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

export default Formulario_Comic_B;
