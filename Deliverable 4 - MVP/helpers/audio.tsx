import { Audio } from "expo-av";
let soundObject1 = new Audio.Sound();
soundObject1.loadAsync(require("../assets/audio/keypress1.mp3"));
let soundObject2 = new Audio.Sound();
soundObject2.loadAsync(require("../assets/audio/keypress2.mp3"));
let soundObject3 = new Audio.Sound();
soundObject3.loadAsync(require("../assets/audio/keypress3.mp3"));
let soundObject4 = new Audio.Sound();
soundObject4.loadAsync(require("../assets/audio/keypress4.mp3"));
let soundObject5 = new Audio.Sound();
soundObject5.loadAsync(require("../assets/audio/keypress5.mp3"));
let soundObject6 = new Audio.Sound();
soundObject6.loadAsync(require("../assets/audio/keypress6.mp3"));
let soundObject7 = new Audio.Sound();
soundObject7.loadAsync(require("../assets/audio/keypress7.mp3"));
let soundObject8 = new Audio.Sound();
soundObject8.loadAsync(require("../assets/audio/keypress8.mp3"));
let soundObject9 = new Audio.Sound();
soundObject9.loadAsync(require("../assets/audio/keypress9.mp3"));
let soundObjectStar = new Audio.Sound();
soundObjectStar.loadAsync(require("../assets/audio/keypressStar.mp3"));
let soundObject0 = new Audio.Sound();
soundObject0.loadAsync(require("../assets/audio/keypress0.mp3"));
let soundObjectPound = new Audio.Sound();
soundObjectPound.loadAsync(require("../assets/audio/keypressPound.mp3"));

export const playButtonSound = async (num: string) => {
  const soundObject = new Audio.Sound();
  try {
    //create the sound object
    //require requires a static file location, values are hardcoded for that reason
    switch (num) {
      case "1": {
        soundObject1.replayAsync();
        break;
      }
      case "2": {
        soundObject2.replayAsync();
        break;
      }
      case "3": {
        soundObject3.replayAsync();
        break;
      }
      case "4": {
        soundObject4.replayAsync();
        break;
      }
      case "5": {
        soundObject5.replayAsync();
        break;
      }
      case "6": {
        soundObject6.replayAsync();
        break;
      }
      case "7": {
        soundObject7.replayAsync();
        break;
      }
      case "8": {
        soundObject8.replayAsync();
        break;
      }
      case "9": {
        soundObject9.replayAsync();
        break;
      }
      case "*": {
        soundObjectStar.replayAsync();
        break;
      }
      case "0": {
        soundObject0.replayAsync();
        break;
      }
      case "#": {
        soundObjectPound.replayAsync();
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
