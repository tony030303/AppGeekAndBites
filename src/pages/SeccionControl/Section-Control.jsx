import { useState } from "react";
import { View, Text, TextInput } from "react-native";

function Control() {
  const [nombre, setNombre] = useState("Nombre");
  const [codigo, setCodigo] = useState("Codigo");
  return (
    <View>
      <Text>
        Esta seccion solo funciona con las credenciales de los adminitradores
      </Text>
      <TextInput onChangeText={setNombre} placeholder={nombre} />
      <TextInput onChangeText={setCodigo} placeholder={codigo} />
      <Text>
        Ingresado: {nombre}, y {codigo}
      </Text>
    </View>
  );
}

export default Control;
