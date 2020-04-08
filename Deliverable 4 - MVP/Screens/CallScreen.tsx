import React, { useState } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";

import Input from "../Components/Input";
import NumberButton from "../Components/NumberButton";
import Tips from "../Components/Tips";
import CallButton from "../Components/CallButton";
import BackButton from "../Components/BackButton";
import EmptyButton from "../Components/EmptyButton";
import * as Animatable from "react-native-animatable";
import { playButtonSound } from "../helpers/audio";

const CallScreen = (props: { successfulCallHandler: () => void }) => {
  const [enteredNums, setEnteredNums] = useState("");
  const [tip, setTip] = useState(
    <Tips info="What is the number? _ _ _" imageType="Remind" />
  );
  const [shake, setShake] = useState(<Text style={styles.inputText}></Text>);
  var dialTip: string[] = new Array(
    "What is the number? _ _ _",
    "What is the number? 9 _ _",
    "What is the number? 9 1 _",
    "What is the number? 9 1 1"
  );

  const pressNumberHandler = (num: string) => {
    playButtonSound(num);
    if (enteredNums.includes("Wrong")) {
      setEnteredNums(num);
      setShake(<Text style={styles.inputText}>{num}</Text>)
      return;
    }
    setEnteredNums(enteredNums + num);
    setShake(<Text style={styles.inputText}>{enteredNums + num}</Text>)
  };

  const pressBackHandler = () => {
    if (enteredNums.includes("Wrong")) {
      setEnteredNums("");
      setShake(<Text style={styles.inputText}>{""}</Text>)
      return;
    }

    setEnteredNums(enteredNums.substr(0, enteredNums.length - 1));
    setShake(<Text style={styles.inputText}>{enteredNums.substr(0, enteredNums.length - 1)}</Text>)
  };

  const callHandler = () => {
    if (enteredNums != "911") {
      if (enteredNums.length != 3) {
        setEnteredNums("Wrong Length");
        setShake(<Animatable.Text animation="shake"iterationCount={1}style={styles.shakeText}>{"Wrong Length"}</Animatable.Text>);
      } else {
        setEnteredNums("Wrong Number");
        setShake(<Animatable.Text animation="shake"iterationCount={1}style={styles.shakeText}>{"Wrong Number"}</Animatable.Text>);
      }
      
      setTimeout(() => {
        setEnteredNums("");
        setShake(<Text style={styles.inputText}>{""}</Text>);
      }, 1750);
      return;
    }
    props.successfulCallHandler();
  };

  return (
    <View style={styles.container}>
      <View style={styles.tipContainer}>{tip}</View>
      <View style={styles.inputContainer}>
        {shake}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          <NumberButton
            num={"1"}
            subText={"    "}
            onPress={pressNumberHandler.bind(this, "1")}
          />
          <NumberButton
            num={"2"}
            subText={"ABC "}
            onPress={pressNumberHandler.bind(this, "2")}
          />
          <NumberButton
            num={"3"}
            subText={"DEF "}
            onPress={pressNumberHandler.bind(this, "3")}
          />
        </View>
        <View style={styles.row}>
          <NumberButton
            num={"4"}
            subText={"GHI "}
            onPress={pressNumberHandler.bind(this, "4")}
          />
          <NumberButton
            num={"5"}
            subText={"JKL "}
            onPress={pressNumberHandler.bind(this, "5")}
          />
          <NumberButton
            num={"6"}
            subText={"MNO "}
            onPress={pressNumberHandler.bind(this, "6")}
          />
        </View>
        <View style={styles.row}>
          <NumberButton
            num={"7"}
            subText={"PQRS"}
            onPress={pressNumberHandler.bind(this, "7")}
          />
          <NumberButton
            num={"8"}
            subText={"TUV "}
            onPress={pressNumberHandler.bind(this, "8")}
          />
          <NumberButton
            num={"9"}
            subText={"WXYZ"}
            onPress={pressNumberHandler.bind(this, "9")}
          />
        </View>
        <View style={styles.row}>
          <NumberButton
            num={"*"}
            subText={"    "}
            onPress={pressNumberHandler.bind(this, "*")}
          />
          <NumberButton
            num={"0"}
            subText={" +  "}
            onPress={pressNumberHandler.bind(this, "0")}
          />
          <NumberButton
            num={"#"}
            subText={"    "}
            onPress={pressNumberHandler.bind(this, "#")}
          />
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
    justifyContent: "center",
  },
  tipContainer: {
    marginTop: 75,
    flex: 1,
  },
  inputContainer: {
    width: "40%",
    margin: 10,
  },
  inputText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "800",
    color: "black",
  },
  shakeText: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "800",
    color: "#cc0000",
  },
  navBarContainer: {
    width: "100%",
    height: "10%",
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  buttonContainer: {
    height: "75%",
    width: "100%",
  },
});

export default CallScreen;
