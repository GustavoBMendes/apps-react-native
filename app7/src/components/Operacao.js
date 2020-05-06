import React, { Component } from 'react';
import { Picker } from 'react-native';

export default class Operacao extends Component {

	render() {
		return(
			<Picker 
				style={{padding: 40, marginLeft: 7}}
				selectedValue={this.props.operacao}
				onValueChange={op => { this.props.atualizaOperacao(op); }}
			>
				<Picker.Item label='Soma' value='soma' />
				<Picker.Item label='Subtração' value='subtracao' />
			</Picker>
		);
	}
}