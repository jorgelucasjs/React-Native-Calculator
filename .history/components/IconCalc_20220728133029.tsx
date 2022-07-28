import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    icon: string;
}

const IconCalc: React.FC<Props> = ({icon}) => {
  return (
    <View style={styles.icon}>
		<Text style={styles.te}>{icon}</Text>
	</View>
  )
}


const styles = StyleSheet.create({
    icon:{
        backgroundColor: '#222',
        marginBottom:5,
		paddingTop: 0,
		height: 'auto',
    },
	te:{
		color: '#FFF',
		fontSize:100,
		fontWeight: 'bold',
		flexGrow: 1,
		textAlign: 'right'
	}
})
export default IconCalc