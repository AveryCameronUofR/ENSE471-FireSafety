import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const NavBar = _props => {
  return (
    <View style={styles.NavBar}>
      <TouchableOpacity style={styles.NavBarItem}>
        <Text style={styles.NavBarItemText}>Call</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.NavBarItem}>
        <Text style={styles.NavBarItemText}>Script</Text>
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
    color: 'black',
    fontSize: 24,
    textAlign: 'center',
  }
});

export default NavBar;