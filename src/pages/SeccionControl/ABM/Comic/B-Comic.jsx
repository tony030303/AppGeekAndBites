import { useState, useEffect } from "react";
import { Modal, TextInput, Text } from "react-native";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton/CustomizableButton";
import { eliminarComic } from "../../../../services/comics.service";
import { styles } from "./comic.styles";
import evento_comic from "../../../../events/evento_comic";

//sonidos
import { playSound } from "../../../../utils/emitirSonido";
import SoundButton from "../../../../components/SoundButton/SoundButton";
import cancel from "../../../../assets/sounds/sfx-cancel.mp3";
import wrong from "../../../../assets/sounds/sfx-error.mp3";
import eliminate from "../../../../assets/sounds/sfx-eliminate.mp3";

const Formulario_Comic_B = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [id, setId] = useState("");

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      setId(""); // Resetear formulario
    }
    //lo que estaba
    setIsVisible(visible);
  }, [visible]);

  const verificarComic = async () => {
    if (!id.trim()) {
      playSound(wrong);
      alert("Por favor, completa todos los campos!!!!!");
      return;
    }

    const resultado = await eliminarComic(id); //llama a función que se encarga de hacer el puente backend - frontend

    if (resultado.success) {
      //exito en el resultado
      evento_comic.emit("comicModificado");
      alert(resultado.message);
      setId("");
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
          sfx={cancel}
        />
      </View>
    </Modal>
  );
};

export default Formulario_Comic_B;
