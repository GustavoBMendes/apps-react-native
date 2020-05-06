/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';


const detalheCliente = require('../imagens_app5/detalhe_cliente.png');
const cliente1 = require('../imagens_app5/cliente1.png');
const cliente2 = require('../imagens_app5/cliente2.png');

export default class CenaClientes extends Component {
  
  render(){
    return(
		<View style={{flex: 1, backgroundColor: '#ffffff'}}>
        	<StatusBar backgroundColor='#B9C941'/>

			<View style={estilos.logoCliente}>
				<Image source={detalheCliente} />
				<Text style={estilos.txtLogo}>Nossos Clientes</Text>
			</View>
			
			<View style={estilos.clientes}>
				<Image source={cliente1} />
				<Text style={estilos.txtCliente}>Lorem ipsum dolorem</Text>
				<Image source={cliente2} />
				<Text style={estilos.txtCliente}>Lorem ipsum dolorem</Text>
			</View>

      	</View>
    );
  }

}

const estilos = {
	logoCliente: {
		flexDirection: 'row',
		padding: 10
	},
	txtLogo: {
		fontSize: 30,
		marginTop: 25,
		marginLeft: 15,
		color: '#B9C941'
	},
	clientes:{
		marginLeft: 25,
		marginTop: 40
	},
	txtCliente:{
		fontSize: 18,
		marginTop: 20,
		marginLeft: 25,
		marginBottom: 40
	}
}