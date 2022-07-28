import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props{
    icon: string;
	bgcolor: string;
	testeColor?:string;
}

const IconCalc: React.FC<Props> = ({icon, bgcolor, testeColor}) => {
  return (
	<TouchableOpacity>
		<View style={{
			...styles.icon,
			backgroundColor:`${bgcolor}`,
			
		}}>
			<Text style={styles.text}>{icon}</Text>
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
		color: '#FFF',
		fontSize:40,
		textAlign: 'center'
	}
})
export default IconCalc