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
        width: 80,
        height: 80,
        borderRadius: 100,
		aspectRatio: 1,
		backgroundColor: '#FF8C00',
		justifyContent: 'center',
		marginBottom
    },
	text:{
		color: '#FFF',
		fontSize:20,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
export default IconCalc