// React libraries
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { Image } from 'expo-image';

// Pages
import Intro from './src/pages/Section-intro';
import Comida from './src/pages/Section-comida';
import Comics from './src/pages/Section-comics';
import Contactos from './src/pages/Section-contactos';

// Define the navigators
const Tab = createMaterialTopTabNavigator();

// Sections
export default function App() {
  const Logo = require('./src/assets/01-logo.jpeg');
  const [fontLoad] = useFonts({
    comic: require('./src/assets/fonts/Rethogen Atomics.otf'),
  });

  if (!fontLoad) {
    return null; // O un indicador de carga
  }

  return (
    <>
      <StatusBar hidden={true} />
        <NavigationContainer>
          <View style={style.backgroundContainer}>
            
            <Tab.Navigator
              initialRouteName='Intro'
              screenOptions={{
              tabBarStyle: style.container,
              tabBarLabelStyle: style.buttonText,
              tabBarIndicatorStyle: { backgroundColor: '#FFFFFF' }}}
              style={{ flex: 1 }}>
            
              <Tab.Screen name='Intro'      component={Intro} options={{ tabBarLabel: '', tabBarIcon: () => (<Image source={Logo} style={style.imagen} />), tabBarShowLabel: false}}/>
              <Tab.Screen name='Comida'     component={Comida} />
              <Tab.Screen name='Comics'     component={Comics} />
              <Tab.Screen name='Contactos'  component={Contactos} />
            
            </Tab.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
}
const style = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    position: 'relative',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'rgba(35, 31, 32, 0.9)',
  },
  imagen: {
    width: 70, // Ajusta el tamaño de la imagen del icono
    height: 70,
    resizeMode:'contain',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
    color: '#FFFFFF',
    padding: 0,
    textAlign: 'center',
    fontFamily: 'comic',
  }
});