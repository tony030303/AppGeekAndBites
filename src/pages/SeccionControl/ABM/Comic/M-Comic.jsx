import { useState, useEffect } from "react";
import { Modal, TextInput, StyleSheet, Text } from "react-native";
import ImageInput from "../../../../components/ImageInput";
import { View } from "react-native-animatable";
import CustomizableButton from "../../../../components/CustomizableButton";
import SoundButton from "../../../../components/SoundButton";

import eliminate from "../../../../assets/sounds/sfx-eliminate.mp3";

const Formulario_Comic_M = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [year, setYear] = useState("");

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      setNombre(""); // Resetear formulario
      setYear("");
      setId("");
    }
    //lo que estaba
    setIsVisible(visible);
  }, [visible]);

  const verificarComic = async () => {
    if (!id.trim() || (!nombre.trim() && !year.trim())) {
      alert("Por favor, completa alguno de los campos!");
      return;
    }

    // guardo los valores previos (ya que se permite que alguno de los campos este vacio)
    const valoresPrevios = { title: nombreAnterior, year: yearAnterior };

    // si alguno de lso campos esta vacio, mantengo el valor previo
    const body = {
      title: nombre.trim() ? nombre : valoresPrevios.title,
      year: year.trim() ? year : valoresPrevios.year,
    };

    try {
      const response = await fetch(`http://192.168.0.218:5000/comics/put/${id}`, {
        //pongan su ip local, porque sino no funciona!!..
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Cómic actualizado correctamente!");
        setId("");
        setNombre("");
        setYear("");
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
            onImageSelected={(uri) => console.log("Imagen seleccionada:", uri)}
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

export default Formulario_Comic_M;
