import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Tips = (props: { info: string }) => {


  let image: JSX.Element = <Image source={require('../assets/Sparky_GoodJob.jpg')}/>;

  return (
    <View style={styles.Tips}>
      {image}
      <Text style={styles.TipsInfo}>{props.info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Tips: {
    width: "100%",
    height: "15%",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  TipsInfo: {
    color: "black",
    fontSize: 24
  }
});

export default Tips;
