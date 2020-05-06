import React from 'react';
import { TextInput } from 'react-native';

export default props => (
	<TextInput 
		style={styles.numero} 
		value={props.num}
		placeholder='Número'
		onChangeText={ valorDoCampo => props.atualizaValor(valorDoCampo, props.nome) }
	/>
);

const styles = {
	numero: {
		width: 140,
		height: 80,
		fontSize: 20,
		borderBottomWidth: 1,
		borderColor: '#cacaca'
	}
};