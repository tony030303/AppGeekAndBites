import { useState, useEffect } from "react";
import { Modal, TextInput, StyleSheet, Text } from "react-native";
import ImageInput from "../../../../components/ImageInput"; // Asegúrate de que ImageInput esté configurado correctamente
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton";
import SoundButton from "../../../../components/SoundButton";
import eliminate from "../../../../assets/sounds/sfx-eliminate.mp3";

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

    const formData = new FormData();
    formData.append("title", nombre);
    formData.append("year", year);
    formData.append("cover", {
      uri: cover,
      type: "image/jpeg", // Ajusta el tipo según el formato
      name: "comic_cover.jpg",
    });

    try {
      const response = await fetch("http://192.168.0.218:5000/api", {
        //pongan su ip local, porque sino no funciona!!..
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data", //"application/json",
        },
        body: formData,
        //body: JSON.stringify(newComic),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Cómic agregado correctamente!");
        setNombre("");
        setYear("");
        setCover(null);
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
      alert("Hubo un problema al conectar con el servidor.");
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
            placeholder="Año"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "rgb(0,0,0)",
  },
  imageInput: {
    width: 200, // Ajusta el tamaño
    height: 50, // Ajusta el tamaño
    backgroundColor: "black",
    borderColor: "lime",
    borderWidth: 0.5,
    color: "white",
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

// {
//   "id": 2,
//   "title": "Amazing Spider-Man 70",
//   "year": 1963,
//   "cover": "comic2.png"
// },
