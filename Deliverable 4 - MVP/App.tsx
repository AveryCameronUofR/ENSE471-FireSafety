import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from 'expo';

import CallScreen from "./Screens/CallScreen";
import ScriptScreen from "./Screens/ScriptScreen";
import TipScreen from "./Screens/TipScreen";
import NavBar from "./Components/NavBar";

import { playRinging, loadAudio  } from "./helpers/audio";

export default function App () {
  const [selectedScreen, setSelectedScreen] = useState("call");
  const loadAudioHandler = async () => {
    await(loadAudio());
  };

  const pressScriptHandler = () => {
    setSelectedScreen("script");
  };
  const pressCallHandler = () => {
    setSelectedScreen("call");
  };

  const successfulCallHandler = () => {
    playRinging();
    setSelectedScreen("tips");
  }

  const tipsCompleteHandler = () => {
    setSelectedScreen("call");
  }

  const [appLoaded, setAppLoaded] = useState(false);

  //show app loading while fetching fonts to avoid errors
  if (!appLoaded) {
    return <AppLoading startAsync={loadAudioHandler} onFinish={() => setAppLoaded(true)} onError={(err)=>{console.log(err)}} />;
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
