import React from 'react';
import { TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BackButton = (props: { onPress: ()=>void }) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <Ionicons name={'ios-backspace'} size={36}/>
    </TouchableOpacity>
  );
};

export default BackButton;