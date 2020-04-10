import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";

import CallScreen from "./Screens/CallScreen";
import ScriptScreen from "./Screens/ScriptScreen";
import TipScreen from "./Screens/TipScreen";
import NavBar from "./Components/NavBar";

import { playRinging, loadAudio } from "./helpers/audio";

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState("startup");
  const [selectedNav, setSelectedNav] = useState(<View></View>);

  const loadAudioHandler = async () => {
    await loadAudio();
  };
  const pressScriptHandler = () => {
    setSelectedScreen("script");
    setSelectedNav(
      <NavBar
        onPhoneSelect={pressCallHandler.bind(this)}
        onScriptSelect={pressScriptHandler.bind(this)}
        phoneSelectedStyle={styles.navNotSelected}
        scriptSelectedStyle={styles.navSelected}
      />
    );
  };
  const pressCallHandler = () => {
    setSelectedScreen("call");
    setSelectedNav(
      <NavBar
        onPhoneSelect={pressCallHandler.bind(this)}
        onScriptSelect={pressScriptHandler.bind(this)}
        phoneSelectedStyle={styles.navSelected}
        scriptSelectedStyle={styles.navNotSelected}
      />
    );
  };

  const successfulCallHandler = () => {
    playRinging();
    setSelectedScreen("tips");
  };

  const tipsCompleteHandler = () => {
    setSelectedScreen("call");
  };

  const [appLoaded, setAppLoaded] = useState(false);

  //show app loading while loading audio
  if (!appLoaded) {
    return (
      <AppLoading
        startAsync={loadAudioHandler}
        onFinish={() => setAppLoaded(true)}
        onError={err => {
          console.log(err);
        }}
      />
    );
  }

  let screen: JSX.Element;
  if (selectedScreen == "startup") {
    setSelectedNav(
      <NavBar
        onPhoneSelect={pressCallHandler.bind(this)}
        onScriptSelect={pressScriptHandler.bind(this)}
        phoneSelectedStyle={styles.navSelected}
        scriptSelectedStyle={styles.navNotSelected}
      />
    );
    setSelectedScreen("call");
  } else if (selectedScreen == "call") {
    screen = (
      <CallScreen successfulCallHandler={successfulCallHandler.bind(this)} />
    );
  } else if (selectedScreen == "script") {
    screen = <ScriptScreen />;
  } else if (selectedScreen == "tips") {
    screen = <TipScreen tipsCompleteHandler={tipsCompleteHandler.bind(this)} />;
  }
  return (
    <View style={styles.container}>
      {screen}
      <View style={styles.navBarContainer}>{selectedNav}</View>
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
  },
  navSelected: {
    flex: 1,
    backgroundColor: "#F2F2F2"
  },
  navNotSelected: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
});
