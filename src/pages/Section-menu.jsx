import React from "react";
import { FlatList } from "react-native";
import { ImageBackground } from "expo-image";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useSharedValue } from "react-native-reanimated";

import comidas from "../jsons/comidas"; //importamos el archivo de comidas

import ListItem from "../components/BlurRotateListItem";

const LIST_DATA = comidas;

export default function Menu() {
  const insets = useSafeAreaInsets();
  const viewables = useSharedValue([]);

  return (
    <FlatList
      contentContainerStyle={[
        {
          paddingTop: insets.top + 60,
          paddingBottom: insets.bottom + 16,
          gap: 30,
        },
      ]}
      numColumns={2}
      columnWrapperStyle={{ paddingHorizontal: 50, gap: 100 }}
      data={LIST_DATA}
      renderItem={({ item, index }) => (
        <ListItem {...{ item, index, viewables }} />
      )}
      keyExtractor={(item, i) => `${item.url}_${i}`}
      onViewableItemsChanged={({ viewableItems }) => {
        viewables.value = viewableItems.map((item) => item.index);
      }}
      viewabilityConfig={{ viewAreaCoveragePercentThreshold: 10 }}
    ></FlatList>
  );
}
