import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    icon: string;
}

const IconCalc: React.FC<Props> = ({icon}) => {
  return (

    <View style={styles.icon}>
		<
	</View>
  )
}


const styles = StyleSheet.create({
    icon:{
        width: 80,
        height: 80,
        borderRadius: 100,
		aspectRatio: 1,
		backgroundColor: '#FFA500',
		justifyContent: 'center',
		marginBottom:10
    },
	text:{
		color: '#FFF',
		fontSize:50,
		textAlign: 'center'
	}
})
export default IconCalc