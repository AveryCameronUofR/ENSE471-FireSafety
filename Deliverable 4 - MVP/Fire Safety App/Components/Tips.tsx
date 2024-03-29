import React from "react";
import { View, StyleSheet, Text, ImageBackground } from "react-native";

const Tips = (props: { info: string; imageType: string}) => {


  let image: JSX.Element;
  if (props.imageType === "Remind"){
    image = <ImageBackground style={styles.image} source={require('../assets/images/SparkyFireDog.jpg')}>
            </ImageBackground>;
  } else if (props.imageType === "GoodJob"){
    image = <ImageBackground style={styles.image} source={require('../assets/images/Sparky_GoodJob.jpg')}>
          
          </ImageBackground>;
  }
  return (
    <View style={styles.Tips}>
      <View style={styles.imageContainer}>
        {image}
      </View>
      <Text style={styles.TipsInfo}>{props.info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Tips: {
    flexDirection: 'row',
    width: "85%",
    height: "15%",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  TipsInfo: {
    position: 'absolute',
    left: -100,
    color: "black",
    fontSize: 24,
    zIndex: 100,
    alignContent: "center",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'black',
    borderWidth: 1,
    overflow: 'hidden',
    margin: 5,
    position: "absolute",
    left: -175,
  },
  image: {
    width: '100%',
    height: '100%',
    alignContent: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});

export default Tips;
