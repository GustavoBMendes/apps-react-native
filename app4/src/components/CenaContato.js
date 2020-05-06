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

const detalheContato = require('../imagens_app5/detalhe_contato.png');

function CenaContato() {
    return(
		<View style={{flex: 1, backgroundColor: '#ffffff'}}>
        	<StatusBar backgroundColor='#61BD8C'/>

			<View style={estilos.logoContato}>
				<Image source={detalheContato} />
				<Text style={estilos.txtLogo}>Contatos</Text>
			</View>
			
			<View style={{marginTop: 40}}>
				<Text style={estilos.txtContato}>TEL: (11) 1234-5678</Text>
				<Text style={estilos.txtContato}>CEL: (11) 9999-8888</Text>
				<Text style={estilos.txtContato}>E-Mail: atm_consultoria@gmail.com</Text>
			</View>

      	</View>
    );

}

const estilos = {
	logoContato: {
		flexDirection: 'row',
		padding: 10
	},
	txtLogo: {
		fontSize: 30,
		marginTop: 25,
		marginLeft: 15,
		color: '#61BD8C'
	},
	txtContato: {
		fontSize: 20,
		marginLeft: 15,
		marginTop: 10
	}
}

export default CenaContato;