import { useState, useEffect } from "react";
import { Modal, TextInput, Text } from "react-native";
import ImageInput from "../../../../components/ImageInput/ImageInput";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton/CustomizableButton";
import { styles } from "./comida.styles";
import { agregarComida } from "../../../../services/comida.service";

//sonidos
import { playSound } from "../../../../utils/emitirSonido";
import SoundButton from "../../../../components/SoundButton/SoundButton";
import eliminate from "../../../../assets/sounds/sfx-cancel.mp3";
import added from "../../../../assets/sounds/sfx-add.mp3";
import wrong from "../../../../assets/sounds/sfx-error.mp3";

const Formulario_Comida_A = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [nombre, setNombre] = useState("");
  const [descri, setDescrip] = useState("");
  const [cover, setCover] = useState(null); // Para manejar la portada de la comida

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      setNombre(""); // Resetear formulario
      setDescrip("");
      setCover(null); //resetear la imagen
    }
    //lo que estaba
    setIsVisible(visible);
  }, [visible]);

  // Función para manejar la imagen seleccionada
  const handleImageSelected = (uri) => {
    setCover(uri);
  };

  //Validación de datos y envío de datos al servidor
  const verificarComida = async () => {
    if (!nombre.trim() || !descri.trim()) {
      playSound(wrong);
      alert("Por favor, completa todos los campos!");
      return;
    }

    const resultado = await agregarComida(nombre, descri, cover); //llama a función que se encarga de hacer el puente backend - frontend

    if (resultado.success) {
      //exito en el resultado
      alert(`${resultado.message}`);
      setNombre("");
      setDescrip("");
      setCover(null);
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
            placeholder="Nombre del Plato"
            placeholderTextColor={"gray"}
          />
        </View>

        <View>
          <Text style={{ color: "white", marginLeft: 10 }}>Descripcion</Text>
          <TextInput
            style={styles.textInput}
            value={descri}
            onChangeText={setDescrip}
            placeholder="Descripcion"
            placeholderTextColor={"gray"}
          />
        </View>
        <View>
          <Text style={{ color: "white", marginLeft: 10 }}>
            Imagen de la Comida
          </Text>
          <ImageInput
            style={styles.imageInput}
            onImageSelected={handleImageSelected} // Actualiza el estado cuando se selecciona una imagen
          />
        </View>

        <CustomizableButton
          title="Subir"
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
