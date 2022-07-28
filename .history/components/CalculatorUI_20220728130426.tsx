import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface Props{
    name: string;
}

const CalculatorUI: React.FC<Props> = ({name}) => {
  return (
    
  )
}


const styles = StyleSheet.create({
    header:{
        backgroundColor: '#000',
        padding:15,
        marginBottom:5,
    },
	title:{
		color: '#fff',
		fontSize: 20,
		padding: 5
	}
})
export default CalculatorUI