import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
//import axios from "axios";
// https://randomuser.me/api/?page=&results=10&seed=abc
const App = () => {
  const [users, setUsers] = useState([]); // parametro donde se contiene todos los usuarios (json)
  const [currentPage, setCurrentPage] = useState(1); //parametro en caso de que hayan mas de una sola pagina (datos online)
  const [isLoading, setIsLoading] = useState(false); // indicar que cuando la pantalla se cargue, haga algo

  const getUsers = () => {
    //fetching con los datos online
    setIsLoading(true); //se pone en true para mostrar datos
    //axios
    //.get(`https://randomuser.me/api/?page=${currentPage}&results=10&seed=abc`)
    //.then((res) => {
    //setUsers([...users, ...res.data.results]); //aca se meten todos los datos y se los suman junto a los primeros valores de users
    //setIsLoading(false); //se pone en falso para que deje de hacer algo
    //});
  };

  const renderLoader = () => {
    //esto solo sirve para indicar la animacion de carga
    return isLoading ? (
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  const loadMoreItem = () => {
    setCurrentPage(currentPage + 1); //cuando se llegue al final de la lista se cambiara a la siguiente pagina del url
  };

  useEffect(() => {
    //cuando currentPage se alterem entonces se tratara de obtener los nuevos usuarios
    getUsers();
  }, [currentPage]);

  const renderItem = ({ item }) => {
    //es el cuerpo que le vas a dar a la app para cada ITEM
    return (
      <View style={styles.itemWrapperStyle}>
        <Image
          style={styles.itemImagesStyles}
          source={{ uri: item.picture.large }}
        />
        <View style={styles.contentWrapperStyle}>
          <Text
            style={styles.txtNameStyle}
          >{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
          <Text style={styles.txtEmailStyle}>{item.email}</Text>
        </View>
      </View>
    );
  };

  return (
    // funcion principal donde la flat List hace su movidita :)
    <FlatList
      data={users} //los datos que va a utilizar
      renderItem={renderItem} //la forma en que los va a mostrar
      keyExtractor={(item) => item.email} //basicamente es el atributo clave, la que no se repite entre las entidades
      ListFooterComponent={renderLoader} // muestra un componente adicional mas, sin embargo lo usamos para indicar la animacion de recarga
      onEndReached={loadMoreItem} // setea el numero de pagina para cargar los nuevos datos
      onEndReachedThreshold={0}
    /> // que tan cerca del final debe estar la lista para activar onEndReached
  );
};

const styles = StyleSheet.create({
  itemWrapperStyle: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "black",
  },
  itemImagesStyles: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 50,
  },
  contentWrapperStyle: {
    justifyContent: "space-around",
  },
  txtNameStyle: {
    fontSize: 16,
  },

  txtEmailStyle: {
    color: "#777",
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: "center",
  },
});

export default App;
