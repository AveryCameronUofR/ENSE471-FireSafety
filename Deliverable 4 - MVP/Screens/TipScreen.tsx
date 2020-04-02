import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { playSuccess, playCorrect } from "../helpers/audio";

const TipScreen = (props: { tipsCompleteHandler: () => void }) => {
  let address = "";
  let addressTip: string = "Good Job " + address;
  let tips: { info: string; imageType: string }[] = [
    { info: "Good Job! The number is 911", imageType: "GoodJob" },
    { info: "What is your emergency? 🔥🚒", imageType: "Remind" },
    { info: "Good Job! Your emergency is a fire!", imageType: "GoodJob" },
    { info: "What is your address? 🏠", imageType: "Remind" },
    { info: addressTip, imageType: "GoodJob" },
    { info: "Are you in danger?", imageType: "Remind" },
    { info: "Good Job!", imageType: "GoodJob" },
    { info: "Great Practice! 911 call complete", imageType: "Complete" }
  ];
  const [currentTip, setCurrentTip] = useState(0);
  let image: JSX.Element;
  if (tips[currentTip].imageType == "GoodJob") {
    image = (
      <Image
        style={styles.image}
        source={require("../assets/images/Sparky_GoodJob.jpg")}
      />
    );
  } else if (tips[currentTip].imageType == "Remind") {
    image = (
      <Image
        style={styles.image}
        source={require("../assets/images/SparkyFireDog.jpg")}
      />
    );
  } else if (tips[currentTip].imageType == "Complete") {
    image = (
      <Image
        style={styles.image}
        source={require("../assets/images/Sparky_Complete.jpg")}
      />
    );
  }

  const nextTipHandler = () => {
    if (currentTip + 1 < tips.length) {
      setCurrentTip(currentTip + 1);
      if (currentTip % 2 == 1) {
        playCorrect();
      } else if (currentTip == 6) {
        playSuccess();
      }
      return;
    }
    props.tipsCompleteHandler();
  };

  const prevTipHandler = () => {
    if (currentTip != 0) {
      setCurrentTip(currentTip - 1);
      return;
    }
    props.tipsCompleteHandler();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>{image}</View>
      <View style={styles.textContainer}>
        <Text style={styles.TipsInfo}>{tips[currentTip].info}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={prevTipHandler}>
          <Ionicons name={"ios-arrow-dropleft"} size={36} />
          <Text>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextTipHandler}>
          <Ionicons name={"ios-arrow-dropright"} size={36} />
          <Text>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  TipsInfo: {
    color: "black",
    fontSize: 32,
    textAlign: "center"
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  button: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 10
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default TipScreen;
