import { Audio } from "expo-av";

export const playButtonSound = async (num: string) => {
  if (Audio.getPermissionsAsync()) {
    const soundObject = new Audio.Sound();
    try {
      //create the sound object
      //require requires a static file location, values are hardcoded for that reason
      switch (num) {
        case "1": {
          await soundObject.loadAsync(require("../assets/audio/keypress1.mp3"));
          break;
        }
        case "2": {
          await soundObject.loadAsync(require("../assets/audio/keypress2.mp3"));
          break;
        }
        case "3": {
          await soundObject.loadAsync(require("../assets/audio/keypress3.mp3"));
          break;
        }
        case "4": {
          await soundObject.loadAsync(require("../assets/audio/keypress4.mp3"));
          break;
        }
        case "5": {
          await soundObject.loadAsync(require("../assets/audio/keypress5.mp3"));
          break;
        }
        case "6": {
          await soundObject.loadAsync(require("../assets/audio/keypress6.mp3"));
          break;
        }
        case "7": {
          await soundObject.loadAsync(require("../assets/audio/keypress7.mp3"));
          break;
        }
        case "8": {
          await soundObject.loadAsync(require("../assets/audio/keypress8.mp3"));
          break;
        }
        case "9": {
          await soundObject.loadAsync(require("../assets/audio/keypress9.mp3"));
          break;
        }
        case "*": {
          await soundObject.loadAsync(
            require("../assets/audio/keypressStar.mp3")
          );
          break;
        }
        case "0": {
          await soundObject.loadAsync(require("../assets/audio/keypress0.mp3"));
          break;
        }
        case "#": {
          await soundObject.loadAsync(require("../assets/audio/keypressPound.mp3"));
          break;
        }
        default: {
          break;
        }
      }
      await soundObject.playAsync();
    } catch (error) {
      // An error occurred!
    }
  }
};
