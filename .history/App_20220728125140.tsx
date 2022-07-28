
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text,StyleSheet, useColorScheme } from 'react-native';


export default function App() {

    const isDarkMode = useColorScheme() === 'dark';


    return (
        <SafeAreaView>

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