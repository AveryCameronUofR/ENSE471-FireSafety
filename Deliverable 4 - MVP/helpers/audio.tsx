import { Audio } from "expo-av";
let buttonSound1 = new Audio.Sound();
buttonSound1.loadAsync(require("../assets/audio/keypress1.mp3"));
let buttonSound2 = new Audio.Sound();
buttonSound2.loadAsync(require("../assets/audio/keypress2.mp3"));
let buttonSound3 = new Audio.Sound();
buttonSound3.loadAsync(require("../assets/audio/keypress3.mp3"));
let buttonSound4 = new Audio.Sound();
buttonSound4.loadAsync(require("../assets/audio/keypress4.mp3"));
let buttonSound5 = new Audio.Sound();
buttonSound5.loadAsync(require("../assets/audio/keypress5.mp3"));
let buttonSound6 = new Audio.Sound();
buttonSound6.loadAsync(require("../assets/audio/keypress6.mp3"));
let buttonSound7 = new Audio.Sound();
buttonSound7.loadAsync(require("../assets/audio/keypress7.mp3"));
let buttonSound8 = new Audio.Sound();
buttonSound8.loadAsync(require("../assets/audio/keypress8.mp3"));
let buttonSound9 = new Audio.Sound();
buttonSound9.loadAsync(require("../assets/audio/keypress9.mp3"));
let buttonSoundStar = new Audio.Sound();
buttonSoundStar.loadAsync(require("../assets/audio/keypressStar.mp3"));
let buttonSound0 = new Audio.Sound();
buttonSound0.loadAsync(require("../assets/audio/keypress0.mp3"));
let buttonSoundPound = new Audio.Sound();
buttonSoundPound.loadAsync(require("../assets/audio/keypressPound.mp3"));

export const playButtonSound = async (num: string) => {
  try {
    //create the sound object
    //require requires a static file location, values are hardcoded for that reason
    switch (num) {
      case "1": {
        buttonSound1.replayAsync();
        break;
      }
      case "2": {
        buttonSound2.replayAsync();
        break;
      }
      case "3": {
        buttonSound3.replayAsync();
        break;
      }
      case "4": {
        buttonSound4.replayAsync();
        break;
      }
      case "5": {
        buttonSound5.replayAsync();
        break;
      }
      case "6": {
        buttonSound6.replayAsync();
        break;
      }
      case "7": {
        buttonSound7.replayAsync();
        break;
      }
      case "8": {
        buttonSound8.replayAsync();
        break;
      }
      case "9": {
        buttonSound9.replayAsync();
        break;
      }
      case "*": {
        buttonSoundStar.replayAsync();
        break;
      }
      case "0": {
        buttonSound0.replayAsync();
        break;
      }
      case "#": {
        buttonSoundPound.replayAsync();
        break;
      }
      default: {
        break;
      }
    }
  } catch (error) {
    // An error occurred!
  }
};
