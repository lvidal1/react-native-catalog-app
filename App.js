import React from 'react'
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';

import { useFonts } from 'expo-font';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import { navigationRef } from './src/RootNavigation';




const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'OpenSans': require('./assets/fonts/OpenSans-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='App_to_Home' screenOptions={{
        headerMode: 'screen'
      }}>
        <Stack.Screen name="App_to_Home" component={Home} options={{
          header: () => <Header headerDisplay={"Aperture"} />
        }} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

