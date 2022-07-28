import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import DisplayScreen from './DisplayScreen';
import IconCalc from './IconCalc';

interface Props {
	name: string;
}

const CalculatorUI: React.FC<Props> = ({ name }) => {

	const arrIcons = [
		{ id: 'AC', color: '#CCC' },
		{ id: '+/-', color: '#CCC' },
		{ id: '%', color: '#CCC' },
		{ id: '/', color: '#FFA500' },

		{ id: '7', color: '#555' },
		{ id: '8', color: '#555' },
		{ id: '9', color: '#555' },
		{ id: '*', color: '#FFA500' },

		{ id: '4', color: '#555' },
		{ id: '5', color: '#555' },
		{ id: '6', color: '#555' },
		{ id: '-', color: '#FFA500' },

		{ id: '1', color: '#555' },
		{ id: '2', color: '#555' },
		{ id: '3', color: '#555' },
		{ id: '+', color: '#FFA500' },

	]


	return (
		<View style={styles.header}>
			<View >
				<Text style={styles.title}>{name}</Text>
			</View>
			<View>
				<DisplayScreen sign='*' number={0} />
			</View>
			<View>
				<View style={styles.container}>

					<View style={styles.numberIconContainer}>
						{
							arrIcons.map((value) => (
								<View style={styles.card} key={value.id}>
									<IconCalc icon={value.id} bgcolor={value.color} />
								</View>
							))
						}
					</View>
				</View>
				<View style={styles.bottomIconContainer}>
						<View style={styles.card}>
							<IconCalc icon={'0'} bgcolor={'#555'} />
						</View>
				</View>
			</View>
		</View>
	)
}


const styles = StyleSheet.create({
	numberIconContainer: {
		paddingTop: 10,
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start'
	},
	bottomIconContainer: {
		width: '100%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		paddingBottom: 30
	},
	card: {
		width: '25%',
	},
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#000',
		flexGrow: 1,
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

})
export default CalculatorUI