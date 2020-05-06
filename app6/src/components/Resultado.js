/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';

const cara = require('../imgs/moeda_cara.png');
const coroa = require('../imgs/moeda_coroa.png');

export default class Resultado extends Component{

	constructor(props){
		super(props);

		this.state = { resultado : '' };
	}

	componentWillMount() {
		const numAleatorio = Math.floor(Math.random() * 2);
		let resultado = '';

		if(numAleatorio === 0) {
			resultado = 'cara';
		}
		else {
			resultado = 'coroa';
		}

		this.setState({ resultado });
	}
	render(){
		if(this.state.resultado === 'cara'){
			return (
				<View style={estilo.cenaPrincipal}>
					<Image source={cara} />
					
				</View>
			);
		}
		else{
			return (
				<View style={estilo.cenaPrincipal}>
					<Image source={coroa} />
				</View>
			);
		}
	};
};

const estilo = {

  cenaPrincipal: {
    flex: 1,
	backgroundColor: '#61BD8C',
	justifyContent: 'center',
	alignItems: 'center'
  },

}
