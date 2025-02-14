import { FlatList, View, Text } from "react-native";
import React from "react";
import SliderPerks from "../components/SliderPerks";
import itemsComidas from "../jsons/itemsComidas";
import styleComidas from "../styles/style-comidas";
import FlipCard from "./utils/FlipCard";

const MenuCard = () => {
  return (
    <View style={[styleComidas.container]}>
      <FlatList
        data={itemsComidas}
        keyExtractor={(_, i) => String(i)}
        numColumns={2}
        renderItem={({ item }) => <FlipCard item={item} mostrar={false} />}
        showsVerticalScrollIndicator={false}
        horizontal={false}
        //TITULO
        ListHeaderComponent={
          <Text style={styleComidas.text}> Menu - Perks!</Text>
        }
        //PERKS EN LA PARTE FINAL DEL SCRLL
        ListFooterComponent={<SliderPerks />}
      />
    </View>
  );
};

export default MenuCard;
