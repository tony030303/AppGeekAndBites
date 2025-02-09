import { View, StyleSheet } from "react-native";
import { useState } from "react";
import Ventana from "../../../../components/Ventana";
import comics from "../../../../jsons/comics.json";
import SoundButton from "../../../../components/SoundButton";
//Partes
import Formulario_Comic_A from "./A-Comic";
import Formulario_Comic_B from "./B-Comic";
import Formulario_Comic_M from "./M-Comic";

const ABMComic = () => {
  const [isVisibleaA, setVisibleA] = useState(false);
  const [isVisibleaB, setVisibleB] = useState(false);
  const [isVisibleaM, setVisibleM] = useState(false);
  return (
    <View style={styles.container}>
      <SoundButton
        title="Agregar    Comic"
        onPress={() => setVisibleA(true)}
        style={[styles.button, { backgroundColor: "green" }]}
      />
      <SoundButton
        title="Eliminar   Comic"
        onPress={() => setVisibleB(true)}
        style={[styles.button, { backgroundColor: "orange" }]}
        textStyle={{ color: "black" }}
      />
      <SoundButton
        title="Modificar  Comic"
        onPress={() => setVisibleM(true)}
        style={[styles.button, { backgroundColor: "yellow", color: "black" }]}
        textStyle={{ color: "black" }}
      />

      <Formulario_Comic_A
        visible={isVisibleaA}
        onClose={() => setVisibleA(false)}
      />
      <Formulario_Comic_B
        visible={isVisibleaB}
        onClose={() => setVisibleB(false)}
      />
      <Formulario_Comic_M
        visible={isVisibleaM}
        onClose={() => setVisibleM(false)}
      />

      <Ventana
        data={comics}
        ancho={300}
        alto={"60%"}
        backgroundColor={"white"}
        color={"black"}
      />
    </View>
  );
};
export default ABMComic;

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
