import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components'
import { theme } from './config'

import {
  StatusBar
} from './components'

import {
  HomeScreen
} from './screens'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar />
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
        </Drawer.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}