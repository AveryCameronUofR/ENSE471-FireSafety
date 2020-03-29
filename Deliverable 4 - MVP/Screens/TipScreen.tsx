import React, { useState }  from "react";
import { View, Text, StyleSheet, Image, Button,TouchableOpacity } from "react-native";
import Tips from "../Components/Tips";

import { Ionicons } from "@expo/vector-icons";
const TipScreen = (props: {tipsCompleteHandler: () => void}) => {
    let address = '';
    let addressTip: string = 'Good Job ' + address; 
    let tips: {info: string, imageType: string}[] = [
        {info: "Good Job, the number is 911", imageType:"GoodJob"},
        {info: "What is your emergency? 🔥🚒🧯 ", imageType:"Remind"},
        {info:"Good Job, your emergency is a Fire!", imageType:"GoodJob"},
        {info:"What is your address? 🏠", imageType:"Remind"},
        {info:addressTip, imageType:"GoodJob"},
        {info:"Are you in danger?", imageType:"Remind"},
        {info:"Good Job!", imageType:"GoodJob"},
        {info:"Great Practice! 911 call complete", imageType:"Complete"},
    ]
    const [currentTip, setCurrentTip] = useState(0);
    let image: JSX.Element; 
    if (tips[currentTip].imageType == 'GoodJob'){
        image = <Image style={styles.image} source={require('../assets/Sparky_GoodJob.jpg')}/>;
    } else if (tips[currentTip].imageType == 'Remind') {
        image = <Image style={styles.image} source={require('../assets/SparkyFireDog.jpg')}/>;
    } else if (tips[currentTip].imageType == 'Complete'){
        image = <Image style={styles.image} source={require('../assets/Sparky_Complete.jpg')}/>;
    }

    const nextTipHandler = () => {
        if (currentTip + 1 < tips.length){
            setCurrentTip(currentTip + 1)
            return;
        }
        props.tipsCompleteHandler();
    }

    const prevTipHandler = () => {
        if (currentTip != 0){
            setCurrentTip(currentTip - 1)
            return;
        }
        props.tipsCompleteHandler();
    }
    
    return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {image}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.TipsInfo}>{tips[currentTip].info}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={prevTipHandler}>
            <Ionicons name={"ios-arrow-dropleft"} size={36} />
            <Text>Previous Tip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextTipHandler}>
            <Ionicons name={"ios-arrow-dropright"} size={36} />
            <Text>Next Tip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    TipsInfo: {
      color: "black",
      fontSize: 24
    },
    imageContainer: {
      flex: 1
    },
    textContainer: {
       flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-between'
     },
    image: {
      width: '100%',
      height: '100%',
    },
  });

export default TipScreen;