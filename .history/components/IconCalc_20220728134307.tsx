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
        flex: 0.3,
		backgroundColor: "pink",
		borderWidth: 5,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
    },
	text:{
		color: '#FFF',
		fontSize:20,
		fontWeight: 'bold',
		textAlign: 'center'
	}
})
export default IconCalc