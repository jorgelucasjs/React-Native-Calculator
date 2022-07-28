import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View, Text,StyleSheet, useColorScheme } from 'react-native';
import ExploreScreen from './screens/Explore';
import RestaurantsScreen from './screens/Restaurants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/Profile';


export default function App() {

    const isDarkMode = useColorScheme() === 'dark';


    return (
        <ScrollView>
    );
}


const style = StyleSheet.create({
    content:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:150,
    }
})