import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    name: string;
}

const CalculatorUI: React.FC<Props> = ({name}) => {
  return (
    <View style={styles.header}>
      <Text>{name}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    header:{
        backgroundColor: '#000',
        padding:15,
        marginBottom:5,
    },
	title:{
		color: #fff;
	}
})
export default CalculatorUI