import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import CallScreen from "./Screens/CallScreen";
import ScriptScreen from "./Screens/ScriptScreen";
import TipScreen from "./Screens/TipScreen";
import NavBar from "./Components/NavBar";

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState("call");
  
  const pressScriptHandler = () => {
    setSelectedScreen("script");
  };
  const pressCallHandler = () => {
    setSelectedScreen("call");
  };

  const successfulCallHandler = () => {
    setSelectedScreen("tips");
  }

  const tipsCompleteHandler = () => {
    setSelectedScreen("call");
  }

  let screen: JSX.Element;
  if (selectedScreen == "call") {
    screen = <CallScreen successfulCallHandler={successfulCallHandler.bind(this)}/>;
  } else if (selectedScreen == "script") {
    screen = <ScriptScreen />;
  } else if (selectedScreen == "tips"){
    screen = <TipScreen tipsCompleteHandler={tipsCompleteHandler.bind(this)}/>
  }

  return (
    <View style={styles.container}>
      {screen}
      <View style={styles.navBarContainer}>
        <NavBar onPhoneSelect={pressCallHandler.bind(this)} onScriptSelect={pressScriptHandler.bind(this)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navBarContainer: {
    width: "100%",
    height: "10%"
  }
});
