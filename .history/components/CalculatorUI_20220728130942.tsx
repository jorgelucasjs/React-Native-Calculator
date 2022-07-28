import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DisplayScreen from './DisplayScreen';

interface Props{
    name: string;
}

const CalculatorUI: React.FC<Props> = ({name}) => {
  return (
    <View>
		<View style={styles.header}>
			<Text style={styles.title}>{name}</Text>
		</View>
		<View>
			<DisplayScreen sign='*' number={}/>
		</View>
	</View>
  )
}


const styles = StyleSheet.create({
    header:{
        backgroundColor: '#000',
        padding:15,
        marginBottom:5,
    },
	title:{
		color: '#fff',
		fontSize: 20,
		padding: 5
	}
})
export default CalculatorUI