import { View, Button } from "react-native";
import { useState } from "react";

//Partes
import Formulario_Comic_A from "./A-Comida";
import Formulario_Comic_B from "./B-Comida";
import Formulario_Comic_M from "./M-Comida";

//Componentes
import Ventana from "../../../../components/Ventana";
import Comics from "../../../../jsons/comics.json";

const ABMComic = () => {
  const [isVisibleaA, setVisibleA] = useState(false);
  const [isVisibleaB, setVisibleB] = useState(false);
  const [isVisibleaM, setVisibleM] = useState(false);
  return (
    <View>
      <Button title="Agregar    Comida" onPress={() => setVisibleA(true)} />
      <Button title="Eliminar   Comida" onPress={() => setVisibleB(true)} />
      <Button title="Modificar  Comida" onPress={() => setVisibleM(true)} />

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
        data={Comics}
        ancho={300}
        alto={200}
        backgroundColor={"white"}
        color={"black"}
      />
    </View>
  );
};
export default ABMComic;
