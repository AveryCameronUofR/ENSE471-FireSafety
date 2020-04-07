import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Input = (props: { input: string; }) => {
    let length = props.input.length;
    var feedback: JSX.Element[] = new Array (length);

    for (var i=0; i < length; i++)
    {
        if (i == 0 && props.input[0] == "9")
        {
            feedback[i] = <Text style={styles.correctInput}>{props.input[0]}</Text>
            continue;
        }
        else if (i == 0 && props.input[0] != "9")
        {
            feedback[i] = <Text style={styles.wrongInput}>{props.input[0]}</Text>
            continue;
        }

        if (i == 1 && props.input[1] == "1")
        {
            feedback[i] = <Text style={styles.correctInput}>{props.input[1]}</Text>
            continue;
        }
        else if (i == 1 && props.input[1] != "1")
        {
            feedback[i] = <Text style={styles.wrongInput}>{props.input[1]}</Text>
            continue;
        }

        if (i == 2 && props.input[2] == "1")
        {
            feedback[i] = <Text style={styles.correctInput}>{props.input[2]}</Text>
            continue;
        }
        else if (i == 2 && props.input[2] != "1")
        {
            feedback[i] = <Text style={styles.wrongInput}>{props.input[2]}</Text>
            continue;
        }

        
        feedback[i] = <Text style={styles.wrongInput}>{props.input[i]}</Text>;
        
    }

      return (
        <View style={styles.Input}>
            <Text style={styles.inputText}>
                {feedback}
            </Text>
        </View>
      );
};

const styles = StyleSheet.create({
    Input: {
        width: "40%",
        margin: 10
    },
    inputText: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "800",
        color: "black"
    },
    wrongInput: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "800",
        color: "red"
      },
    correctInput: {
        fontSize: 30,
        textAlign: "center",
        fontWeight: "800",
        color: "green"
    },
});

export default Input;