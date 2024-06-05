// In App.js in a new project

import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './Screen/CustomDrawer';
import Lyrics from './Screen/Lyrics';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Screen/Profile';
import Gallery from './Screen/Gallery';
import BatchMate from './Screen/BatchMate';
import Services from './Screen/Services';


const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        {/* <Drawer.Navigator> */}
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />} initialRouteName='Lyrics'>

          <Drawer.Screen
            name="Profile"
            component={Profile}
          // options={{ headerShown: false }}                                                                
          />
          <Drawer.Screen
            name="Gallery"
            component={Gallery}
          // options={{ headerShown: false }}                                                                
          />
          <Drawer.Screen
            name="BatchMark"
            component={BatchMate}
          // options={{ headerShown: false }}                                                                
          />
          
          <Drawer.Screen
            name="Services"
            component={Services}
          // options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>


    </>


  );
  const styles = StyleSheet.create({
    container: {
      borderColor: "red",
      borderWidth: 4
    }
  })
}

export default App;