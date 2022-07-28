import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props{
    icon: string;
	bgcolor: string;
	testeColor:string;
	onPress: (value: string | number)=> void
}

const IconCalc: React.FC<Props> = ({icon, bgcolor, testeColor, onPress}) => {
  return (
	<TouchableOpacity>
		<View style={{
			...styles.icon,
			backgroundColor:`${bgcolor}`,
			
		}}>
			<Text style={{
				...styles.text,
				color: `${testeColor}`
			}}>{icon}</Text>
		</View>
	</TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    icon:{
        width: 80,
        height: 80,
        borderRadius: 100,
		aspectRatio: 1,
		justifyContent: 'center',
		marginBottom:15,
    },
	text:{
		fontSize:40,
		textAlign: 'center'
	}
})
export default IconCalc