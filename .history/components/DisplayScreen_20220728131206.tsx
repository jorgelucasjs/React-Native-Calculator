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
		
		</View>
	</View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#222',
        padding:15,
        marginBottom:5,
		paddingTop: 0,
		height: 100;
    },
	default:{

	}
})
export default DisplayScreen