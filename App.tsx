import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CallScreen from './Screens/CallScreen';
import ScriptScreen from './Screens/ScriptScreen';
import NavBar from './Components/NavBar';

let selectedScreen: JSX.Element = <CallScreen/>
const pressScriptHandler = () => {
  selectedScreen = <ScriptScreen/>
}
const pressCallHandler = () => {
  selectedScreen = <CallScreen/>
}

export default function App() {
  return (
    
    <View style={styles.container}>
        {selectedScreen}
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
		width: '100%',
		height: '10%'
	},
}); 

