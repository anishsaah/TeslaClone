// In App.js in a new project
import * as React from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import Base from './Base';
import {  NativeBaseProvider } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Drawer = createDrawerNavigator();

function App() {
  return (
  <NativeBaseProvider>
    <NavigationContainer >
      <Drawer.Navigator 
        screenOptions={{
          headerShown: false,
          drawerPosition: 'right'
        }}
      >
        <Drawer.Screen name="Home" component={Base} />
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
        { /* <Stack.Screen name="Home" component={HomeScreen} /> */}
        {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      

      </Drawer.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;