import { useState, useEffect } from "react";
import { Modal, TextInput, StyleSheet, Text } from "react-native";
import ImageInput from "../../../../components/ImageInput";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton";
import SoundButton from "../../../../components/SoundButton";

import eliminate from "../../../../assets/sounds/sfx-eliminate.mp3";

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

  //VALIDACION ->> VER DE MEJORARLO

  //Validación de datos y envío de datos al servidor
  const verificarComida = async () => {
    if (!nombre.trim() || !descri.trim()) {
      alert("Por favor, completa todos los campos!");
      return;
    }

    console.log(cover);

    const formData = new FormData();
    formData.append("accion", "comidas"); //se pasa en el formato para la busqueda de la carpeta en la que se guardara la imagen
    formData.append("title", nombre);
    formData.append("year", descri);
    formData.append("cover", {
      uri: cover,
      type: "image/jpeg", // Ajusta el tipo según el formato
      name: "comida_cover.jpg",
    });

    try {
      const response = await fetch("http://192.168.0.20:5000/comidas", {
        //ip alba: 192.168.0.20
        //ip tony?: 192.168.0.218
        //pongan su ip local, porque sino no funciona!!..
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Comida agregada correctamente!");
        setNombre("");
        setDescrip("");
        setCover(null);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Hubo un problema al conectar con el servidor");
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

export default Formulario_Comida_A;
