import React from "react";
import { View, Text, FlatList } from "react-native";
import itemsContactos from "../../jsons/itemsContactos";
import { styles } from "./ContactosList.styles.js";
import FlipCard from "../FlipCard/FlipCard";

const ContactosList = () => {
  return (
    //contenedor de las tarjetas de contactos.
    <View style={styles.container}>
      <FlatList
        //armo la lista con las tarjetas de contactos
        data={itemsContactos} 
        keyExtractor={(_, index) => String(index)} //índice del objeto como clave
        renderItem={({ item }) => <FlipCard item={item} mostrar={false} />} //para cada tarjeta de contacto
        showsVerticalScrollIndicator={false} //barra de desplazamiento ocultada
        horizontal={false} 
        ListHeaderComponent={<Text style={styles.heading}>Contactanos!</Text>} //encabezado
      />
    </View>
  );
};

export default ContactosList; //Exportación
