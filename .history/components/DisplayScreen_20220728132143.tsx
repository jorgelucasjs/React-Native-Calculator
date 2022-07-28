import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    sign: string;
	number: number;
}

const DisplayScreen: React.FC<Props> = ({sign, number}) => {
  return (
    <View style={styles.container}>
		<View style={styles.container}>
			<Text style={styles.default}>0</Text>
		</View>
	</View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#222',
        marginBottom:5,
		paddingTop: 0,
		height: 150,
		flex: 1,
		alignItems
    },
	default:{
		color: '#FFF',
		fontSize:20,
		fontWeight: 'bold',
		flexGrow: 1,
		
	}
})
export default DisplayScreen