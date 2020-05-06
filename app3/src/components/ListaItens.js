/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  ScrollView,
  Text
} from 'react-native';

import Itens from './Itens'
import Axios from 'axios';

export default class ListaItens extends Component {
  
	constructor(props) {
		super(props);

		this.state = { listaItens: [] };
	}

	UNSAFE_componentWillMount() {
		//requisição http
		Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
		.then(response => { this.setState({ listaItens: response.data }); })
		.catch(() => { console.log('Erro ao carregar as informações.'); });
	}

	render() {
		return (
			<ScrollView style={{backgroundColor: '#DDD'}}>
				{ this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />)) }
			</ScrollView>
		);
	}

}
