import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    sign: string;
	number: number;
}

const DisplayScreen: React.FC<Props> = ({sign}) => {
  return (
    <View style={ styles.container}>
		
	</View>
  )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#000',
        padding:15,
        marginBottom:5,
    }
})
export default DisplayScreen