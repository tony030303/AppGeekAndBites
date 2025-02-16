import { useState, useEffect } from "react";
import { Modal, TextInput, Text } from "react-native";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton/CustomizableButton";
import { styles } from "./comida.styles";
import evento_comic from "../../../../events/evento_comic";
import { eliminarComida } from "../../../../services/comida.service";

//sonidos
import { playSound } from "../../../../utils/emitirSonido";
import SoundButton from "../../../../components/SoundButton/SoundButton";
import cancel from "../../../../assets/sounds/sfx-cancel.mp3";
import wrong from "../../../../assets/sounds/sfx-error.mp3";
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
  const verificarComida = async () => {
    if (!nombre.trim()) {
      playSound(wrong);
      alert("Por favor, completa todos los campos!!!!!");
      return;
    }

    const resultado = await eliminarComida(nombre);

    if (resultado.success) {
      //exito al eliminar la comida
      alert(`${resultado.message}`);
      setNombre("");
      playSound(eliminate);
      onClose();
    } else {
      alert(`Error: ${resultado.message}`);
      playSound(wrong);
    }
  };
  return (
    <Modal visible={isVisible} animationType={"fade"}>
      <View style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <Text style={{ color: "white", marginLeft: 10 }}>
            Nombre del Plato
          </Text>
          <TextInput
            style={styles.textInput}
            value={nombre}
            onChangeText={setNombre}
            placeholder="Nombre del Plato"
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
          sfx={cancel}
        />
      </View>
    </Modal>
  );
};

export default Formulario_Comida_B;
