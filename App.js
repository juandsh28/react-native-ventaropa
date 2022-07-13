import React from 'react'
import ListaRopa from './src/views/ListaRopa'
import NuevaRopa from './src/views/NuevaRopa'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { DetallesRopa } from './src/views/DetallesRopa'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const tema = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#117864'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ListaRopa' screenOptions={{
        headerStyle: { backgroundColor: tema.colors.primary }, headerTintColor: tema.colors.surface
      }}>
        <Stack.Screen name="ListaRopa" options={{ title: "Inicio" }} component={ListaRopa} />
        <Stack.Screen name="NuevaRopa" options={{ title: "Nueva" }} component={NuevaRopa} />
        <Stack.Screen name="DetallesRopa" options={{ title: "Detalles" }} component={DetallesRopa} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

