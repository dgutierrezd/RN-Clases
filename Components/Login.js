import React, {useState} from 'react';

import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {Header} from 'react-native-elements';
import HeaderNav from './Header';

const Login = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitLogin = () => {
    navigation.navigate('Users', {email});
  };

  return (
    <View>
      <HeaderNav navigation={navigation} />
      <View style={styles.login}>
        <Text>{route.params.nombre}</Text>
        <TextInput
          onChangeText={e => setEmail(e)}
          value={email}
          style={styles.input}
          placeholder="Email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          onChangeText={e => setPassword(e)}
          value={password}
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
        />
        <View style={styles.button}>
          <Button title="Enviar" onPress={() => submitLogin()} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    margin: 12,
    marginBottom: 10,
  },
  button: {
    marginLeft: 30,
    marginRight: 30,
  },
});

export default Login;
