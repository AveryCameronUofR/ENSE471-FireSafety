import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";

import NumberButton from "../Components/NumberButton";
import Tips from "../Components/Tips";
import CallButton from "../Components/CallButton";
import BackButton from "../Components/BackButton";
import EmptyButton from "../Components/EmptyButton";

import { playButtonSound } from '../helpers/audio';

const CallScreen = (props: {successfulCallHandler: () => void}) => {
  const [enteredNums, setEnteredNums] = useState("");
  let tip: JSX.Element = <Tips info="What is the number? _ _ _" imageType="Remind"/>;
  const pressNumberHandler = (num: string) => {
    setEnteredNums(enteredNums + num);
    playButtonSound(num);
  };

  const pressBackHandler = () => {
    setEnteredNums(enteredNums.substr(0, enteredNums.length - 1));
  };
  
  const callHandler = () => {
    if (enteredNums.length != 3) {
      Alert.alert("Wrong length");
      return;
    }
    if (enteredNums != "911") {
      Alert.alert("Wrong Number");
      return;
    }
    props.successfulCallHandler();
  };

  return (
    <View style={styles.container}>
      <View style={styles.tipContainer}>
        {tip}
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>{enteredNums}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <NumberButton num={"1"} subText={"    "} onPress={pressNumberHandler.bind(this, "1")}/>
          <NumberButton num={"2"} subText={"ABC "} onPress={pressNumberHandler.bind(this, "2")}/>
          <NumberButton num={"3"} subText={"DEF "} onPress={pressNumberHandler.bind(this, "3")}/>
        </View>
        <View style={styles.row}>
          <NumberButton num={"4"} subText={"GHI "} onPress={pressNumberHandler.bind(this, "4")}/>
          <NumberButton num={"5"} subText={"JKL "} onPress={pressNumberHandler.bind(this, "5")}/>
          <NumberButton num={"6"} subText={"MNO "} onPress={pressNumberHandler.bind(this, "6")}/>
        </View>
        <View style={styles.row}>
          <NumberButton num={"7"} subText={"PQRS"} onPress={pressNumberHandler.bind(this, "7")}/>
          <NumberButton num={"8"} subText={"TUV "} onPress={pressNumberHandler.bind(this, "8")}/>
          <NumberButton num={"9"} subText={"WXYZ"} onPress={pressNumberHandler.bind(this, "9")}/>
        </View>
        <View style={styles.row}>
          <NumberButton num={"*"} subText={"    "} onPress={pressNumberHandler.bind(this, "*")}/>
          <NumberButton num={"0"} subText={" +  "} onPress={pressNumberHandler.bind(this, "0")}/>
          <NumberButton num={"#"} subText={"    "} onPress={pressNumberHandler.bind(this, "#")}/>
        </View>
        <View style={styles.row}>
          <EmptyButton />
          <CallButton onPress={callHandler} />
          <BackButton onPress={pressBackHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  tipContainer: {
    marginTop: 75,
    flex: 1
  },
  inputContainer: {
    width: "40%",
    margin: 10
  },
  inputText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "800"
  },
  navBarContainer: {
    width: "100%",
    height: "10%"
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center"
  },
  buttonContainer: {
    height: "75%",
    width: "100%"
  }
});

export default CallScreen;
