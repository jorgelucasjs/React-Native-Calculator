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
        width: 200,
        height: 200,
        borderColor: '#FF3D00',
        borderWidth: 5,
		aspectRatio
    },
	text:{
		color: '#FFF',
		fontSize:20,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
export default IconCalc