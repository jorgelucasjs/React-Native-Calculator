import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DisplayScreen from './DisplayScreen';
import IconCalc from './IconCalc';

interface Props{
    name: string;
}

const CalculatorUI: React.FC<Props> = ({name}) => {
  return (
    <View style={styles.header}>
		<View >
			<Text style={styles.title}>{name}</Text>
		</View>
		<View>
			<DisplayScreen sign='*' number={0}/>
		</View>
		<View style={styles.numberIconContainer}>
			<IconCalc icon='*'/>
			<IconCalc icon='/'/>
			<IconCalc icon='-'/>
			<IconCalc icon='+'/>
			<IconCalc icon='*'/>
		</View>
	</View>
  )
}


const styles = StyleSheet.create({
    header:{
        backgroundColor: '#000',
        padding:1,
    },
	title:{
		color: '#fff',
		fontSize: 20,
		padding: 5
	},
	numberIconContainer:{
		backgroundColor: '#000',
		height: 500,
		paddingTop: 10
		
	}
})
export default CalculatorUI