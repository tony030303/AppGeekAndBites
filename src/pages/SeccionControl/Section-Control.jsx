import { useState } from "react";
import { Text, TextInput, Button, View } from "react-native";
import Credenciales from "./Credenciales.json";
import Controlador from "./Controlador";
function Control() {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [error, setError] = useState(false);
  const [modal, setModal] = useState(true);

  const verificarCredencial = () => {
    // Buscar en el array un usuario con el nombre ingresado
    const usuario = Credenciales.find((admin) => admin.nombre === nombre);

    if (usuario && usuario.codigo === codigo) {
      setError(false);
      setModal(false);
    } else {
      setNombre("");
      setCodigo("");
      setError(true);
    }
  };

  return (
    <View>
      {modal && (
        <>
          <Text>
            Esta sección solo funciona con las credenciales de los
            administradores.
          </Text>
          <TextInput
            onChangeText={setNombre}
            value={nombre}
            placeholder="Nombre"
          />
          <TextInput
            onChangeText={setCodigo}
            value={codigo}
            placeholder="Código"
            secureTextEntry
          />
          <Button title="Ingresar" onPress={verificarCredencial} />
          {error && <Text>⚠️ Credenciales Incorrectas</Text>}
        </>
      )}

      {!modal && <Controlador />}
    </View>
  );
}

export default Control;
