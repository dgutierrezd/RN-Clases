import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Users from './Users';
import Login from './Login';
import UserStack from './UserStack';
import LoginStack from './LoginStack';

const Drawer = createDrawerNavigator();

function DrawerNavigation(props) {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Users" component={UserStack} />
      <Drawer.Screen name="Login" component={LoginStack} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
