import React from 'react'
import 'react-native-gesture-handler'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import Header from './src/components/Header';
import Footer from './src/components/Footer';
import { navigationRef } from './src/RootNavigation';

import Home from './src/pages/Home';
import NewsDetail from './src/pages/NewsDetail';
import About from './src/pages/About';
import Quote from './src/pages/Quote';


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
        <Stack.Screen name="NewsDetail" component={NewsDetail} options={{
          header: () => <Header headerDisplay={"News"} />
        }} />
        <Stack.Screen name="About" component={About} options={{
          header: () => <Header headerDisplay={"About"} />
        }} />
        <Stack.Screen name="Quote" component={Quote} options={{
          header: () => <Header headerDisplay={"Quote"} />
        }} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}

