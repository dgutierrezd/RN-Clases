import React from 'react';

import {Header} from 'react-native-elements';

const HeaderNav = ({navigation}) => {
  return (
    <Header
      leftComponent={{
        icon: 'menu',
        color: '#fff',
        onPress: () => navigation.openDrawer(),
      }}
      centerComponent={{text: 'Mi primera App', style: {color: '#fff'}}}
      rightComponent={{
        icon: 'home',
        color: '#fff',
        onPress: () =>
          navigation.navigate('Login', {
            nombre: 'Daniel',
            // pagina.com/user/Daniel
          }),
      }}
    />
  );
};

export default HeaderNav;
