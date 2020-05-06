import React from 'react';
import { View, Text } from 'react-native';

export default props => (
	<View style={estilo.header}>
		<Text style={estilo.titulo}>Calculadora 1.0</Text>
	</View>
);

const estilo = {
	header: {
		backgroundColor: '#2196F3',
		padding: 20,
		alignItems: 'center'
	},
	titulo: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#fff'
	}
}