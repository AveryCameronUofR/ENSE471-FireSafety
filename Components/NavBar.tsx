import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
const NavBar = _props => {
  return (
    <View style={styles.NavBar}>
      <TouchableOpacity style={styles.NavBarItem}>
        <Ionicons style={styles.NavBarItemIcon} name={'ios-call'} size={36}/>
        <Text style={styles.NavBarItemText}>Phone</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.NavBarItem}>
        <Feather style={styles.NavBarItemIcon} name ={'file-text'} size={36}/>
        <Text style={styles.NavBarItemText}>Script</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  NavBar: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    height: '10%',
    marginTop: 10,
  },
  NavBarItem: {
    flex: 1,
    
    padding: 0,
    margin: 0,
  },
  NavBarItemIcon: {
    textAlign: 'center',
    borderColor: 'black',
    borderTopWidth: 1.5,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
  },
  NavBarItemText: {
    textAlign: 'center',
    borderColor: 'black',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 0,
    borderBottomWidth: 1.5,
  }
});

export default NavBar;