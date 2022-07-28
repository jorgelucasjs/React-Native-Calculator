import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import DisplayScreen from './DisplayScreen';
import IconCalc from './IconCalc';

interface Props {
	name: string;
}

const CalculatorUI: React.FC<Props> = ({ name }) => {

	const arrIcons = [
		{id: 'AC',color: '#f00'},
		{id: '+/-',color: '#f00'},
		{id: '%',color: '#f00'},
		{id: '+',color: '#f00'},
		{id: '7',color: '#f00'},
		{id: '8',color: '#f00'},
		{id: '9',color: '#f00'},
		{id: 'AC',color: '#f00'},
		{id: 'AC',color: '#f00'},
		{id: 'AC',color: '#f00'},
		{id: 'AC',color: '#f00'},
		{id: 'AC',color: '#f00'},
	]
	return (
		<View style={styles.header}>
			<View >
				<Text style={styles.title}>{name}</Text>
			</View>
			<View>
				<DisplayScreen sign='*' number={0} />
			</View>

			<View style={styles.container}>
				<View style={styles.numberIconContainer}>
					<IconCalc icon='*' />
					<IconCalc icon='/' />
					<IconCalc icon='-' />
					<IconCalc icon='+' />
					<IconCalc icon='=' />
				</View>
				<View style={styles.numberIconContainer}>
					<IconCalc icon='*' />
					<IconCalc icon='/' />
					<IconCalc icon='-' />
					<IconCalc icon='+' />
					<IconCalc icon='=' />
				</View>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	header: {
		backgroundColor: '#000',
		padding: 1,
	},
	title: {
		color: '#fff',
		fontSize: 20,
		padding: 5
	},
	numberIconContainer: {
		backgroundColor: '#000',
		height: 500,
		paddingTop: 10,

	}
})
export default CalculatorUI