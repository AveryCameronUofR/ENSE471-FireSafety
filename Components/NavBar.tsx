import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
const NavBar = (props: {onPhoneSelect: ()=>void, onScriptSelect: ()=>void}) => {
  return (
    <View style={styles.NavBar}>
      <TouchableOpacity style={styles.NavBarItem} onPress={props.onPhoneSelect}>
        <Ionicons style={styles.NavBarItemIcon} name={'ios-call'} size={36}/>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.NavBarItem} onPress={props.onScriptSelect}>
        <Feather style={styles.NavBarItemIcon} name ={'file-text'} size={36}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  NavBar: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
    height: '10%',
    marginTop: 10,
    borderColor: 'black',
    borderTopWidth: 1.5,
  },
  NavBarItem: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  NavBarItemIcon: {
    flex:1,
    paddingTop: 10,
    textAlign: 'center',
    borderColor: 'black',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 0,
  },
});

export default NavBar;