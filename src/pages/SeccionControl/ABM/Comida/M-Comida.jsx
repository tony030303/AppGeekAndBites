import { useState, useEffect } from "react";
import { Modal, TextInput, Text } from "react-native";
import ImageInput from "../../../../components/ImageInput";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton";
import SoundButton from "../../../../components/SoundButton";
import { styles } from "./comida.styles";
import eliminate from "../../../../assets/sounds/sfx-eliminate.mp3";

const Formulario_Comida_A = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [nombre, setNombre] = useState("");
  const [year, setYear] = useState("");

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      setNombre(""); // Resetear formulario
      setYear("");
    }
    //lo que estaba
    setIsVisible(visible);
  }, [visible]);

  return (
    <Modal visible={isVisible} animationType={"fade"}>
      <View style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <Text style={{ color: "white", marginLeft: 10 }}>ID del Plato</Text>
          <TextInput
            style={styles.textInput}
            value={nombre}
            onChangeText={setNombre}
            placeholder="ID"
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
            value={year}
            onChangeText={setYear}
            placeholder="Descripción"
            placeholderTextColor={"gray"}
          />
        </View>
        <View>
          <Text style={{ color: "white", marginLeft: 10 }}>Imagen</Text>
          <ImageInput
            style={styles.imageInput}
            onImageSelected={(uri) => console.log("Imagen seleccionada:", uri)}
          />
        </View>

        <CustomizableButton
          title="Subir"
          onPress={onClose}
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
