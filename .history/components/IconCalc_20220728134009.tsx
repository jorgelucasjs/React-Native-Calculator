import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    icon: string;
}

const IconCalc: React.FC<Props> = ({icon}) => {
  return (
    <View style={styles.icon}>
		<Text style={styles.text}>{icon}</Text>
	</View>
  )
}


const styles = StyleSheet.create({
    icon:{
        backgroundColor: '#222',
        marginBottom:5,
		paddingTop: 0,
		height: 'auto',
		borderRadius: '100',
		aspectRatio: 1
    },
	text:{
		color: '#FFF',
		fontSize:50,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
export default IconCalc