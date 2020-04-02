import React from "react";
import { ScrollView, Text, StyleSheet, Linking } from "react-native";

const ScriptScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>
        911 Call Example:
      </Text>
      <Text style={styles.infoText}>
        {`
          911: What is your emergency?
          Caller: There is a Fire.
          911: Where is the emergency?
          Caller: [Address, Description]
          911: What is your name?
          Caller: [Name]
          911: What is your telephone number?
          Caller: [Telephone number]
          911: Do you need police or an ambulance?
          Caller:
        `}
      </Text>
      <Text style={styles.headerText}>
        Additional Fire Questions:
      </Text>
      <Text style={styles.infoText}>
        {`
          Are you in danger?
          Is anyone trapped or injured?
          Are smoke and flames visible?
          What type of fire are you reporting?
        `}
      </Text>

      <Text style={styles.headerText}>
        911 Safety Tips
      </Text>
      <Text style={styles.subheaderText}>
        Police emergencies
      </Text>
      <Text style={styles.infoText}>
        {`
          Are you in danger, or is someone's life in danger?
          If a crime was committed, can you provide a description of the offender?
          Are there any weapons involved?
        `}
      </Text>
      <Text style={styles.subheaderText}>
        Medical emergencies
      </Text>
      <Text style={styles.infoText}>
        {`
          Is the person conscious? Breathing? What else can you tell about the person's condition?
          Is the person able to tell you anything about the problem he/she is experiencing?
          Are you able to provide emergency first aid? Is it safe to do so?
        `}
      </Text>
      <Text style={styles.subheaderText}>
        Rescue situations
      </Text>
      <Text style={styles.infoText}>
        {`
          How many people are trapped or injured or in need of rescue?
          If the situation involves vehicles, what types of vehicles are involved and how many?
          Are there any other hazards present?
          Is there a risk of fire?
        `}
      </Text>
      <Text style={styles.subheaderText}>
        Dangerous goods situations
      </Text>
      <Text style={styles.infoText}>
        {`
          Is fuel or other dangerous cargo leaking?
          Is there a sign with an identification number or symbol on the side, front or back of the vehicle or vehicles? 
          If so, can you identify what the symbol is?
        `}
        </Text>
      <Text style={styles.subheaderText}>
        Prank calls to 911
      </Text>
      <Text style={styles.infoText}>
        {`
          Prank calls are traceable and will be investigated. They are a serious abuse of the Sask911 system.
          Prank calls are traceable and will be investigated.
          All incoming calls are recorded. The use of profanity or abuse of the telephone system may result in restrictions on phone service, or charges under the Criminal Code.
          If emergency vehicles are dispatched for no reason, the prank caller may be liable for the costs involved.
        `}
      </Text>
      <Text style={styles.subheaderText}>
        Additional Information
      </Text>
      <Text style={{color: 'blue', textDecorationLine: "underline"}}
          onPress={() => Linking.openURL('https://www.saskatchewan.ca/residents/emergency/sask911#911-safety-tips')}>
          Sask 911
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 36,
    textAlign: "center",
  },
  subheaderText: {
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "justify",
  },
  infoText:{
    fontSize: 24,
    textAlign: "justify",
  }
});
export default ScriptScreen;
