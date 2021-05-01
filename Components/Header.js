import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.texto}>Mi primera App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#89ccf5',
  },
  texto: {
    marginTop: 50,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 30,
    color: '#ffffff',
  },
});

export default Header;
