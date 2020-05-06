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

const detalheEmpresa = require('../imagens_app5/detalhe_empresa.png');

function CenaEmpresa() {
    return(
		<View style={{flex: 1, backgroundColor: '#ffffff'}}>
        	<StatusBar backgroundColor='#EC7148'/>

			<View style={estilos.logoEmpresa}>
				<Image source={detalheEmpresa} />
				<Text style={estilos.txtLogo}>A Empresa</Text>
			</View>
			
			<View style={{marginTop: 40}}>
				<Text style={estilos.txtEmpresa}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Text>
			</View>

      	</View>
    );

}

const estilos = {
	logoEmpresa: {
		flexDirection: 'row',
		padding: 10
	},
	txtLogo: {
		fontSize: 30,
		marginTop: 25,
		marginLeft: 15,
		color: '#EC7148'
	},
	txtEmpresa: {
		fontSize: 20,
		marginLeft: 15,
		marginTop: 10
	}
}

export default CenaEmpresa;