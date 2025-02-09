import { View, Button } from "react-native";
import { useState } from "react";

//Partes
import Formulario_Comic_A from "./A-Comic";
import Formulario_Comic_B from "./B-Comic";
import Formulario_Comic_M from "./M-Comic";

const ABMComic = () => {
  const [isVisibleaA, setVisibleA] = useState(false);
  const [isVisibleaB, setVisibleB] = useState(false);
  const [isVisibleaM, setVisibleM] = useState(false);
  return (
    <View>
      <Button title="Agregar    Comic" onPress={() => setVisibleA(true)} />
      <Button title="Eliminar   Comic" onPress={() => setVisibleB(true)} />
      <Button title="Modificar  Comic" onPress={() => setVisibleM(true)} />

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
    </View>
  );
};
export default ABMComic;
