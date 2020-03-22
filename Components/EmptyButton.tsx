import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

const EmptyButton = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={1} onPress={() => {}}>
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
      },
});
export default EmptyButton;