import { useState, useEffect } from "react";
import { Modal, TextInput, Text } from "react-native";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton";
import SoundButton from "../../../../components/SoundButton";
import { styles } from "./comida.styles";
import eliminate from "../../../../assets/sounds/sfx-eliminate.mp3";

const Formulario_Comida_B = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [nombre, setNombre] = useState("");
  

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      setNombre(""); // Resetear formulario
    }
    //lo que estaba
    setIsVisible(visible);
  }, [visible]);

  //Validación de datos
  const verificarComida = () => {
    if (!nombre.trim()) {
      alert("Por favor, completa todos los campos!!!!!");
      return;
    }
    console.log("Comida eliminada con id :", nombre);
  };
  return (
    <Modal visible={isVisible} animationType={"fade"}>
      <View style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <Text style={{ color: "white", marginLeft: 10 }}>ID del Plato</Text>
          <TextInput
            style={styles.textInput}
            value={nombre}
            onChangeText={setNombre}
            placeholder="id del Plato"
            placeholderTextColor={"gray"}
          />
        </View>

        <CustomizableButton
          title="Eliminar"
          onPress={verificarComida}
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

export default Formulario_Comida_B;
