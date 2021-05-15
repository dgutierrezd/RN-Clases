import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Users from './Users';
import Login from './Login';

const Stack = createStackNavigator();

function UserStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Users">
      <Stack.Screen
        name="Users"
        component={Users}
        options={{headerTitle: 'Home'}}
      />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default UserStack;
