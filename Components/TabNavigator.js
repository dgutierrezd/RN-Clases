import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Users from './Users';
import Login from './Login';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="account-circle" size={size} color={color} />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Icon name="login" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
