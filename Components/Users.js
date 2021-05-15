import React from 'react';
import {useEffect} from 'react';
import {Button} from 'react-native';

import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderNav from './Header';

const Users = ({navigation, route}) => {
  const {email} = route.params || '';

  const users = [
    {id: 0, name: 'Sergio'},
    {id: 1, name: 'Ariana'},
    {id: 2, name: 'Nico'},
    {id: 3, name: 'Daniel'},
    {id: 4, name: 'Sergio'},
    {id: 5, name: 'Ariana'},
    {id: 6, name: 'Nico'},
    {id: 7, name: 'Daniel'},
    {id: 8, name: 'Ariana'},
    {id: 9, name: 'Nico'},
    {id: 10, name: email},
  ];

  return (
    <View>
      <HeaderNav navigation={navigation} />
      <ScrollView style={styles.users}>
        <Card>
          {users.map(user => {
            return (
              <View key={user.id}>
                <Icon name="account-circle" size={30} />
                <Text style={styles.name}>{user.name}</Text>
              </View>
            );
          })}
        </Card>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  users: {
    marginTop: 30,
    marginBottom: 80,
  },
  name: {
    fontSize: 50,
  },
});

export default Users;
