import { Audio } from "expo-av";
//DTMF sounds from https://www.audiocheck.net/audiocheck_dtmf.php 
//For educational use, permission confirmed.
let buttonSound1 = new Audio.Sound();
buttonSound1.loadAsync(require("../assets/audio/dtmf_1.mp3"));
let buttonSound2 = new Audio.Sound();
buttonSound2.loadAsync(require("../assets/audio/dtmf_2.mp3"));
let buttonSound3 = new Audio.Sound();
buttonSound3.loadAsync(require("../assets/audio/dtmf_3.mp3"));
let buttonSound4 = new Audio.Sound();
buttonSound4.loadAsync(require("../assets/audio/dtmf_4.mp3"));
let buttonSound5 = new Audio.Sound();
buttonSound5.loadAsync(require("../assets/audio/dtmf_5.mp3"));
let buttonSound6 = new Audio.Sound();
buttonSound6.loadAsync(require("../assets/audio/dtmf_6.mp3"));
let buttonSound7 = new Audio.Sound();
buttonSound7.loadAsync(require("../assets/audio/dtmf_7.mp3"));
let buttonSound8 = new Audio.Sound();
buttonSound8.loadAsync(require("../assets/audio/dtmf_8.mp3"));
let buttonSound9 = new Audio.Sound();
buttonSound9.loadAsync(require("../assets/audio/dtmf_9.mp3"));
let buttonSoundStar = new Audio.Sound();
buttonSoundStar.loadAsync(require("../assets/audio/dtmf_S.mp3"));
let buttonSound0 = new Audio.Sound();
buttonSound0.loadAsync(require("../assets/audio/dtmf_0.mp3"));
let buttonSoundPound = new Audio.Sound();
buttonSoundPound.loadAsync(require("../assets/audio/dtmf_P.mp3"));

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

//Sound effect from: https://soundbible.com/1003-Ta-Da.html by Mike Koenig Attribution 3.0
const successSound = new Audio.Sound();
successSound.loadAsync(
  require("../assets/audio/success.mp3")
);
export const playSuccess = async () => {
  try {
    successSound.replayAsync();
  } catch (error) {}
};

//Sound effect obtained from: https://www.zapsplat.com/ Attribution 3.0
const correctSound = new Audio.Sound();
correctSound.loadAsync(
  require("../assets/audio/correct.mp3")
);
export const playCorrect = async () => {
  try {
    correctSound.replayAsync();
  } catch (error) {}
};

//Sound effect obtained from: https://freesound.org/people/NuclearTape/sounds/475550/ CC0 1.0
const ringingSound = new Audio.Sound();
ringingSound.loadAsync(
  require("../assets/audio/ring-back-tone.mp3")
);
export const playRinging = async () => {
  try {
    ringingSound.replayAsync();
  } catch (error) {}
};
