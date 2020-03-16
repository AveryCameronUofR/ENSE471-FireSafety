import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Tips = (props: { info: string }) => {
  return (
    <View style={styles.Tips}>
      <Text style={styles.TipsInfo}>{props.info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Tips: {
    width: '100%',
    height: '15%',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  TipsInfo: {
    color: 'black',
    fontSize: 24,
  }
});

export default Tips;