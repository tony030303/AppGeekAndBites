import { useState, useEffect } from "react";
import { Modal, TextInput, Text } from "react-native";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton/CustomizableButton";
import { modificarComic } from "../../../../services/comics.service";
import { styles } from "./comic.styles";
import evento_comic from "../../../../events/evento_comic";

//sonidos
import { playSound } from "../../../../utils/emitirSonido";
import SoundButton from "../../../../components/SoundButton/SoundButton";
import eliminate from "../../../../assets/sounds/sfx-cancel.mp3";
import modified from "../../../../assets/sounds/sfx-modified.mp3";
import wrong from "../../../../assets/sounds/sfx-error.mp3";

//Modificación de cómic por año de publicacion
const Formulario_Comic_M = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [id, setId] = useState("");
  const [year, setYear] = useState("");

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      //resetear formulario
      setYear();
      setId("");
    }
    setIsVisible(visible);
  }, [visible]);

  const verificarComic = async () => {
    if (!id.trim() || !year.trim()) {
      alert("Por favor, completá los campos!");
      playSound(wrong);
      return;
    }

    const resultado = await modificarComic(id, year);
    if (resultado.success) {
      //exito en el resultado
      alert(resultado.message);
      setId("");
      setYear(); //verlo
      evento_comic.emit("comicModificado");
      //evento_comic.emit("comicModificado", { id, year });
      playSound(modified);
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
            placeholder="ID"
            placeholderTextColor={"gray"}
          />
        </View>

        <View>
          <Text style={{ color: "white", marginLeft: 10 }}>Año</Text>
          <TextInput
            style={styles.textInput}
            value={year}
            onChangeText={setYear}
            placeholder="Año (ingresá solo valores númericos)"
            placeholderTextColor={"gray"}
          />
        </View>

        <CustomizableButton
          title="Subir"
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

export default Formulario_Comic_M;
