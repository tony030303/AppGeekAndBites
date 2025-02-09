import { useState, useEffect } from "react";
import { Modal, Button, TextInput } from "react-native";

const Formulario_Comic_M = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [datos, setDatos] = useState({
    title: "",
    year: "",
  });

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    if (!visible) {
      setDatos({ title: "", year: "" }); // Resetear formulario
    }
    setIsVisible(visible);
  }, [visible]);

  const subirComic = () => {
    if (!datos.title.trim() || !datos.year.trim()) {
      alert("Por favor, completa todos los campos.");
      return;
    }
    console.log("Datos:", datos);
  };


  return (
    <Modal visible={isVisible}>
      <TextInput
        value={datos.title}
        onChangeText={(text) =>
          setDatos((prevDatos) => ({ ...prevDatos, title: text }))
        }
        placeholder="Nombre del Comic"
      />
      <TextInput
        value={datos.year}
        onChangeText={(text) =>
          setDatos((prevDatos) => ({ ...prevDatos, year: text }))
        }
        placeholder="Año"
      />
      <Button title="Subir" onPress={subirComic} />
      <Button title="Cancelar" onPress={onClose} />
    </Modal>
  );
};

export default Formulario_Comic_M;
