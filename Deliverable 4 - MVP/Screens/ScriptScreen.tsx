import React from "react";
import { ScrollView, Text, StyleSheet, Linking } from "react-native";

const ScriptScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>
        911 Call Example:
      </Text>
      <Text style={styles.infoText}>
{`911: What is your emergency?
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
      <Text style={styles.subheaderText}>
        Additional Fire Questions:🔥
      </Text>
      <Text style={styles.emojis}></Text>
      <Text style={styles.infoText}>
{`\u2022 Are you in danger?
\u2022 Is anyone trapped or injured?
\u2022 Are smoke and flames visible?
\u2022 What type of fire are you reporting?
`}
      </Text>

      <Text style={styles.headerText}>
        911 Safety Tips
      </Text>
      <Text style={styles.subheaderText}>
        Police emergencies🚓
      </Text>
      <Text style={styles.infoText}>
{`\u2022 Are you in danger, or is someone's life in danger?
\u2022 If a crime was committed, can you provide a description of the offender?
\u2022 Are there any weapons involved?
`}
      </Text>
      <Text style={styles.subheaderText}>
        Medical emergencies🏥
      </Text>
      <Text style={styles.infoText}>
{`\u2022 Is the person conscious? Breathing? What else can you tell about the person's condition?
\u2022 Is the person able to tell you anything about the problem he/she is experiencing?
\u2022 Are you able to provide emergency first aid? Is it safe to do so?
`}
      </Text>
      <Text style={styles.subheaderText}>
        Rescue situations⛑
      </Text>
      <Text style={styles.infoText}>
{`\u2022 How many people are trapped or injured or in need of rescue?
\u2022 If the situation involves vehicles, what types of vehicles are involved and how many?
\u2022 Are there any other hazards present?
\u2022 Is there a risk of fire?
`}
      </Text>
      <Text style={styles.subheaderText}>
        Dangerous goods situations☢
      </Text>
      <Text style={styles.infoText}>
{`\u2022 Is fuel or other dangerous cargo leaking?
\u2022 Is there a sign with an identification number or symbol on the side, front or back of the vehicle or vehicles? 
\u2022 If so, can you identify what the symbol is?
`}
        </Text>
      <Text style={styles.subheaderText}>
        Prank calls to 911
      </Text>
      <Text style={styles.infoText}>
{`\u2022 Prank calls are traceable and will be investigated. They are a serious abuse of the Sask911 system.
\u2022 Prank calls are traceable and will be investigated.
\u2022 All incoming calls are recorded. The use of profanity or abuse of the telephone system may result in restrictions on phone service, or charges under the Criminal Code.
\u2022 If emergency vehicles are dispatched for no reason, the prank caller may be liable for the costs involved.
`}
      </Text>
      <Text style={styles.subheaderText}>
        Additional Information❓
      </Text>
      <Text style={{color: 'blue', textDecorationLine: "underline", fontSize: 24,}}
          onPress={() => Linking.openURL('https://www.saskatchewan.ca/residents/emergency/sask911#911-safety-tips')}>
          Sask 911
      </Text>
      <Text>
        {`\n\n`}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 15,
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
  },
  emojis:{
    textAlign: "center",
  }
});
export default ScriptScreen;
