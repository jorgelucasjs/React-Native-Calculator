import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

interface Props{
    icon: string;
	bgcolor: string
}

const BigCardICalc: React.FC<Props> = ({icon, bgcolor}) => {
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
      
        height: 80,
        borderRadius: 50,

		justifyContent: 'center',
		marginBottom:10,
    },
	text:{
		color: '#FFF',
		fontSize:50,
		textAlign: 'left'
	}
})
export default BigCardICalc