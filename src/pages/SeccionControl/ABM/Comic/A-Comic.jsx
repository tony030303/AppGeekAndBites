import { useState, useEffect } from "react";
import { Modal, TextInput, StyleSheet, Text } from "react-native";
import ImageInput from "../../../../components/ImageInput"; // Asegúrate de que ImageInput esté configurado correctamente
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton";
import SoundButton from "../../../../components/SoundButton";
import eliminate from "../../../../assets/sounds/sfx-eliminate.mp3";
import { agregarComic } from "../../../../services/comics.service";
import { styles } from "./comic.styles";
const Formulario_Comida_A = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [nombre, setNombre] = useState("");
  const [year, setYear] = useState("");
  const [cover, setCover] = useState(null); // Para manejar la portada del cómic

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      setNombre(""); // Resetear formulario
      setYear("");
      setCover(null); // Resetear la imagen
    }
    setIsVisible(visible);
  }, [visible]);

  // Función para manejar la imagen seleccionada
  const handleImageSelected = (uri) => {
    setCover(uri);
  };

  //Validación de datos y envío de datos al servidor
  const verificarComic = async () => {
    if (!nombre.trim() || !year.trim()) {
      alert("Por favor, completa todos los campos!");
      return;
    }
    const resultado = await agregarComic(nombre, year, cover); //llama a función que se encarga de hacer el puente backend - frontend

    if (resultado.success) {
      //exito en el resultado
      alert(resultado.message);
      setNombre("");
      setYear("");
      setCover(null);
    } else {
      alert(`Error: ${resultado.message}`);
    }
  };

  return (
    <Modal visible={isVisible} animationType={"fade"}>
      <View style={styles.container}>
        <View style={{ marginTop: 50 }}>
          <Text style={{ color: "white", marginLeft: 10 }}>
            Nombre del Comic
          </Text>
          <TextInput
            style={styles.textInput}
            value={nombre}
            onChangeText={setNombre}
            placeholder="Nombre del Comic"
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
        <View>
          <Text style={{ color: "white", marginLeft: 10 }}>Tapa del Comic</Text>
          <ImageInput
            style={styles.imageInput}
            onImageSelected={handleImageSelected} // Actualiza el estado cuando se selecciona una imagen
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


export default Formulario_Comida_A;
