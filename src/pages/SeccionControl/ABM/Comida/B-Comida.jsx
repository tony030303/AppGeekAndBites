import { useState, useEffect } from "react";
import { Modal, Button, TextInput } from "react-native";

const Formulario_Comida_B = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(visible);
  const [datos, setDatos] = useState({
    title: "",
    year: "",
  });

  // Actualizar el estado interno cuando cambia la prop `visible`
  useEffect(() => {
    setIsVisible(visible);
  }, [visible]);

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
      <Button title="Subir" onPress={() => console.log("Datos:", datos)} />
      <Button title="Cancelar" onPress={onClose} />
    </Modal>
  );
};

export default Formulario_Comida_B;
