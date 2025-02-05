import { useState } from "react";
import { View, Button, Vibration } from "react-native";

import ABMComic from "./ABM/Comic/InterfazComic";
import ABMComida from "./ABM/Comida/InterfazComida";

function Controlador() {
  const [verComida, setVerComida] = useState(false);
  const [verComic, setVerComic] = useState(false);
  const [verCancelar, setVerCancelar] = useState(false);
  const abrirABMComida = () => {
    setVerComida(true);
    setVerCancelar(true);
  };

  const abrirABMComic = () => {
    setVerComic(true);
    setVerCancelar(true);
  };
  const cancelar = () => {
    setVerCancelar(false);
    setVerComida(false);
    setVerComic(false);
    Vibration.vibrate(20);
  };
  return (
    <View>
      {verCancelar && <Button title="Cancelar" onPress={cancelar} />}
      {!verCancelar && (
        <>
          <Button title="ABM COMIDAS" onPress={abrirABMComida} />
          <Button title="ABM COMICS" onPress={abrirABMComic} />
        </>
      )}

      {verComida && <ABMComida />}
      {verComic && <ABMComic />}
    </View>
  );
}

export default Controlador;
