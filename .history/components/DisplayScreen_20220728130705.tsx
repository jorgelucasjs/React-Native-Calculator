import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    sign: string;
	number: number;
}

const DisplayScreen: React.FC<Props> = ({name}) => {
  return (
    <View>
		<View style={styles.header}>
			<Text style={styles.title}>{name}</Text>
		</View>
		<View>
			
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
export default DisplayScreen