import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
const NavBar = _props => {
  return (
    <View style={styles.NavBar}>
      <TouchableOpacity style={styles.NavBarItem}>
        <Ionicons style={styles.NavBarItemText} name={'ios-call'} size={36}/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.NavBarItem}>
        <Feather style={styles.NavBarItemText} name ={'file-text'} size={36}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  NavBar: {
    flexDirection: 'row',
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  NavBarItem: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1.25,
    padding: 0,
    margin: 0
  },
  NavBarItemText: {
    textAlign: 'center',
  }
});

export default NavBar;