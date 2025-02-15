import React, { useState } from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { styles } from "./ImageInput.styles";
import * as ImagePicker from "expo-image-picker";

const ImageInput = ({ onImageSelected, style }) => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 5],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      onImageSelected && onImageSelected(result.assets[0].uri);
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, style]} // 🔥 Permite personalizar el estilo
      onPress={pickImage}
    >
      {image ? (
        <Image source={{ uri: image }} style={[styles.image, style]} />
      ) : (
        <Text style={[styles.text, { color: style?.color || "gray" }]}>
          Seleccionar imagen
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default ImageInput;
