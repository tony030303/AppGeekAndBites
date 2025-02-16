import { useState, useEffect } from "react";
import { Modal, TextInput, Text } from "react-native";
import ImageInput from "../../../../components/ImageInput/ImageInput";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton/CustomizableButton";
import SoundButton from "../../../../components/SoundButton/SoundButton";
import { styles } from "./comida.styles";
import eliminate from "../../../../assets/sounds/sfx-cancel.mp3";
import { modificarComida } from "../../../../services/comida.service";
import added from "../../../../assets/sounds/sfx-add.mp3";

const Formulario_Comida_A = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [nombre, setNombre] = useState("");
  const [descri, setDescrip] = useState("");

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      setNombre(""); // Resetear formulario
      setDescrip("");
    }
    //lo que estaba
    setIsVisible(visible);
  }, [visible]);

  //Validación de datos y envío de datos al servidor
  const verificarComida = async () => {
    if (!nombre.trim() || !descri.trim()) {
      playSound(wrong);
      alert("Por favor, completa todos los campos!");
      return;
    }

    const resultado = await modificarComida(nombre, descri); //llama a función que se encarga de hacer el puente backend - frontend

    if (resultado.success) {
      //exito en el resultado
      alert(`${resultado.message}`);
      setNombre("");
      setDescrip("");
      playSound(added);
      onClose();
    } else {
      alert(`Error: ${resultado.message}`);
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
            placeholder="Nombre del plato"
            placeholderTextColor={"gray"}
          />
        </View>

        <View>
          <Text style={{ color: "white", marginLeft: 10 }}>Descripcion</Text>
          <TextInput
            style={[
              styles.textInput,
              {
                height: 200,
                textAlignVertical: "top", // Alinea el texto en la parte superior
                textAlign: "left", // Alinea el texto a la izquierda
              },
            ]}
            value={descri}
            onChangeText={setDescrip}
            placeholder="Descripción"
            placeholderTextColor={"gray"}
          />
        </View>

        <CustomizableButton
          title="Modificar"
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

export default Formulario_Comida_A;
