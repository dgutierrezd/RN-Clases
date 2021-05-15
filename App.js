import React from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {View} from 'react-native';
import Header from './Components/Header';
import Login from './Components/Login';
import Users from './Components/Users';
import TabNavigator from './Components/TabNavigator';
import DrawerNavigation from './Components/DrawerNavigation';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
      {/* <TabNavigator /> */}
      {/* <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Users"
          component={Users}
          options={{headerTitle: 'Home'}}
        />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
