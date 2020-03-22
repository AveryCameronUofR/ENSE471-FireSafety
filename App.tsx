import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CallScreen from './Screens/CallScreen';
import ScriptScreen from './Screens/ScriptScreen';
import NavBar from './Components/NavBar';

export default function App() {
  const [selectedScreen, setSelectedScreen] = useState('call');
  let screen: JSX.Element = <CallScreen/>
  const pressScriptHandler = () => {
    setSelectedScreen('script');
  }
  const pressCallHandler = () => {
    setSelectedScreen('call');
  }
  
  if (selectedScreen == 'call'){
    screen = <CallScreen/>
  } else if (selectedScreen == 'script'){
    screen = <ScriptScreen/>
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
		width: '100%',
		height: '10%'
	},
}); 

