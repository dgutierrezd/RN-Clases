import React from 'react';

import {View} from 'react-native';
import Header from './Components/Header';
import Login from './Components/Login';
import Users from './Components/Users';

const App = () => {
  return (
    <View>
      <Header />
      {/* <Login /> */}
      <Users />
    </View>
  );
};

export default App;
