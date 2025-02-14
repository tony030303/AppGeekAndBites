import React from "react";
import { View, Text, FlatList } from "react-native";
import itemsContactos from "../../jsons/itemsContactos";
import { styles } from "./ContactosList.styles.js";
import FlipCard from "../utils/FlipCard";

const ContactosList = () => {
  return (
    //contenedor de las tarjetas de contactos.
    <View style={styles.container}>
      <FlatList
        data={itemsContactos}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => <FlipCard item={item} mostrar={false} />}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        ListHeaderComponent={<Text style={styles.heading}>Contactanos!</Text>}
      />
    </View>
  );
};

export default ContactosList; //Exportación
