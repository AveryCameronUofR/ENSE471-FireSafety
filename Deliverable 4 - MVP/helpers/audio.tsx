import { Audio } from "expo-av";

const buttonSound1 = new Audio.Sound();
const buttonSound2 = new Audio.Sound();
const buttonSound3 = new Audio.Sound();
const buttonSound4 = new Audio.Sound();
const buttonSound5 = new Audio.Sound();
const buttonSound6 = new Audio.Sound();
const buttonSound7 = new Audio.Sound();
const buttonSound8 = new Audio.Sound();
const buttonSound9 = new Audio.Sound();
const buttonSoundStar = new Audio.Sound();
const buttonSound0 = new Audio.Sound();
const buttonSoundPound = new Audio.Sound();

const successSound = new Audio.Sound();
const correctSound = new Audio.Sound();
const ringingSound = new Audio.Sound();

export const loadAudio = async() => {
  //DTMF sounds from https://www.audiocheck.net/audiocheck_dtmf.php
  //For educational use, permission confirmed.
  await buttonSound1.loadAsync(require("../assets/audio/dtmf_1.mp3"));
  await buttonSound2.loadAsync(require("../assets/audio/dtmf_2.mp3"));
  await buttonSound3.loadAsync(require("../assets/audio/dtmf_3.mp3"));
  await buttonSound4.loadAsync(require("../assets/audio/dtmf_4.mp3"));
  await buttonSound5.loadAsync(require("../assets/audio/dtmf_5.mp3"));
  await buttonSound6.loadAsync(require("../assets/audio/dtmf_6.mp3"));
  await buttonSound7.loadAsync(require("../assets/audio/dtmf_7.mp3"));
  await buttonSound8.loadAsync(require("../assets/audio/dtmf_8.mp3"));
  await buttonSound9.loadAsync(require("../assets/audio/dtmf_9.mp3"));
  await buttonSoundStar.loadAsync(require("../assets/audio/dtmf_S.mp3"));
  await buttonSound0.loadAsync(require("../assets/audio/dtmf_0.mp3"));
  await buttonSoundPound.loadAsync(require("../assets/audio/dtmf_P.mp3"));

  //Sound effect from: https://soundbible.com/1003-Ta-Da.html by Mike Koenig Attribution 3.0
  await successSound.loadAsync(require("../assets/audio/success.mp3"));
  //Sound effect obtained from: https://www.zapsplat.com/ Attribution 3.0
  await correctSound.loadAsync(require("../assets/audio/correct.mp3"));
  //Sound effect obtained from: https://freesound.org/people/NuclearTape/sounds/475550/ CC0 1.0
  await ringingSound.loadAsync(require("../assets/audio/ring-back-tone.mp3"));
};

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
    console.log(error);
  }
};

export const playSuccess = async () => {
  try {
    successSound.replayAsync();
  } catch (error) {
    console.log(error);
  }
};


export const playCorrect = async () => {
  try {
    correctSound.replayAsync();
  } catch (error) {
    console.log(error);
  }
};

export const playRinging = async () => {
  try {
    ringingSound.replayAsync();
  } catch (error) {
    console.log(error);
  }
};
