import { View, StyleSheet } from "react-native";
import { useState } from "react";
import SoundButton from "../../../../components/SoundButton";

//Partes
import Formulario_Comida_A from "./A-Comida";
import Formulario_Comida_B from "./B-Comida";
import Formulario_Comida_M from "./M-Comida";

//Componentes
import Ventana from "../../../../components/Ventana";
import Comidas from "../../../../jsons/comics.json";

const ABMComida = () => {
  const [isVisibleaA, setVisibleA] = useState(false);
  const [isVisibleaB, setVisibleB] = useState(false);
  const [isVisibleaM, setVisibleM] = useState(false);
  return (
    <View style={styles.container}>
      <SoundButton
        title="Agregar    Comida"
        onPress={() => setVisibleA(true)}
        style={[styles.button, { backgroundColor: "green" }]}
      />
      <SoundButton
        title="Eliminar   Comida"
        onPress={() => setVisibleB(true)}
        style={[styles.button, { backgroundColor: "orange" }]}
        textStyle={{ color: "black" }}
      />
      <SoundButton
        title="Modificar  Comida"
        onPress={() => setVisibleM(true)}
        style={[styles.button, { backgroundColor: "yellow", color: "black" }]}
        textStyle={{ color: "black" }}
      />

      <Formulario_Comida_A
        visible={isVisibleaA}
        onClose={() => setVisibleA(false)}
      />
      <Formulario_Comida_B
        visible={isVisibleaB}
        onClose={() => setVisibleB(false)}
      />
      <Formulario_Comida_M
        visible={isVisibleaM}
        onClose={() => setVisibleM(false)}
      />

      <Ventana
        data={Comidas}
        ancho={300}
        alto={"60%"}
        backgroundColor={"white"}
        color={"black"}
      />
    </View>
  );
};
export default ABMComida;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    marginVertical: 10,
    width: 300,
    borderRadius: 20,
  },
});
