import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text,StyleSheet, useColorScheme } from 'react-native';
import React from 'react';
import CalculatorUI from './components/CalculatorUI';


export default function App() {

    return (
        <SafeAreaView>
			<CalculatorUI name='CalculatorUI'/>
		</SafeAreaView>
    );
}


const style = StyleSheet.create({
    content:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:150,
    }
})