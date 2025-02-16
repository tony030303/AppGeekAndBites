import { FlatList, View, Text } from "react-native";
import React from "react";
import SliderPerks from "../SliderPerks/SliderPerks";
import styleMenuCard from "./MenuCard.styles";
import FlipCard from "../FlipCard/FlipCard";
import itemsComidas from "../../jsons/comidas.json";
import { imageComidas } from "../../jsons/imageComidas";

const MenuCard = () => {
  const comidasConImagenes = itemsComidas.map((comida) => ({
    ...comida,
    backgroundImage:
      imageComidas[comida.backgroundImage as keyof typeof imageComidas],
  }));

  return (
    <View style={[styleMenuCard.container]}>
      <FlatList
        data={comidasConImagenes}
        keyExtractor={(_, i) => String(i)}
        numColumns={2}
        renderItem={({ item }) => <FlipCard item={item} mostrar={false} />}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        //TITULO
        ListHeaderComponent={
          <Text style={styleMenuCard.text}> Menu - Perks!</Text>
        }
        //PERKS EN LA PARTE FINAL DEL SCRLL
        ListFooterComponent={<SliderPerks />}
      />
    </View>
  );
};

export default MenuCard;
