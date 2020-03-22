import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

const NumberButtons = (props: { num: string, subText: string, onPress: ()=>void}) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.num}</Text>
        <Text style={styles.buttonSubText}>{props.subText}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
    width: 70,
    height: 70,
    backgroundColor: '#e0e0e4',
    borderRadius: 35,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 24
  },
  buttonSubText: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 11
  },
});

export default NumberButtons;