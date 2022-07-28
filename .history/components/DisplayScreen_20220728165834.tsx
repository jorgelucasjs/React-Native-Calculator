import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    sign: string;
	number: number;
}

const DisplayScreen: React.FC<Props> = ({sign, number}) => {
	const arrayNumber = [];
	
  return (
    <View style={styles.container}>
		<View style={styles.container}>
			<Text style={styles.default}>{number}</Text>
		</View>
	</View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#222',
        marginBottom:5,
		paddingTop: 0,
		height: 'auto',
    },
	default:{
		color: '#FFF',
		fontSize:100,
		flexGrow: 1,
		textAlign: 'right'
	}
})
export default DisplayScreen