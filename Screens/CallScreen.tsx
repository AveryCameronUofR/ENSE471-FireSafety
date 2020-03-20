import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, Alert} from 'react-native';


import NumberButton from '../Components/NumberButton';
import Tips from '../Components/Tips';
import NavBar from '../Components/NavBar';
import CallButton from '../Components/CallButton'
const CallScreen = () => {
	const [enteredNums, setEnteredNums] = useState([]);

	const pressNumberHandler = (num: number) => {
		setEnteredNums([...enteredNums, num]);
	};

	const callHandler = () =>{
		if (enteredNums.length != 3){
			Alert.alert('Wrong length');
			return;
		}
		if (enteredNums[0] != 9 || enteredNums[1] != 1 || enteredNums[1] != 1){
			Alert.alert('Wrong Number')
			return;
		}
		Alert.alert('You Called 911');
	}

	return (
		<View style={styles.container}>
			<View style={styles.tipContainer}>
				<Tips info="This is a long sting of text for tips that goes over the screen line" />
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputText}>{enteredNums}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<View style={styles.row}>
					<NumberButton num={'1'} subText={'    '} onPress={pressNumberHandler.bind(this, '1')} />
					<NumberButton num={'2'} subText={'ABC '} onPress={pressNumberHandler.bind(this, '2')} />
					<NumberButton num={'3'} subText={'DEF '} onPress={pressNumberHandler.bind(this, '3')} />
				</View>
				<View style={styles.row}>
					<NumberButton num={'4'} subText={'GHI '} onPress={pressNumberHandler.bind(this, '4')} />
					<NumberButton num={'5'} subText={'JKL '} onPress={pressNumberHandler.bind(this, '5')} />
					<NumberButton num={'6'} subText={'MNO '} onPress={pressNumberHandler.bind(this, '6')} />
				</View>
				<View style={styles.row}>
					<NumberButton num={'7'} subText={'PQRS'} onPress={pressNumberHandler.bind(this, '7')} />
					<NumberButton num={'8'} subText={'TUV '} onPress={pressNumberHandler.bind(this, '8')} />
					<NumberButton num={'9'} subText={'WXYZ'} onPress={pressNumberHandler.bind(this, '9')} />
				</View>
				<View style={styles.row}>
					<NumberButton num={'*'} subText={'    '} onPress={pressNumberHandler.bind(this, '*')} />
					<NumberButton num={'0'} subText={'+'} onPress={pressNumberHandler.bind(this, '0')} />
					<NumberButton num={'#'} subText={'    '} onPress={pressNumberHandler.bind(this, '#')} />
				</View>
			</View>
			<CallButton onPress={callHandler} />
			<View style={styles.navBarContainer}>
				<NavBar />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tipContainer: {
		marginTop: 75,
		flex: 1,
	},
	inputContainer: {
		width: '40%',
		margin: 10
	},
	inputText: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: '800'
	},
	navBarContainer: {
		flexDirection: 'column'
	},
	row: {
		flexDirection: 'row',
		flex: 1,
		flexWrap: 'nowrap',
		alignContent: 'center',
		justifyContent: 'center',
	},
	buttonContainer: {
		height: '60%',
		width: '100%',
		alignContent: 'center',
		justifyContent: 'space-around',
	}
});

export default CallScreen;