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

const detalheServico = require('../imagens_app5/detalhe_servico.png');

function CenaServicos() {
    return(
		<View style={{flex: 1, backgroundColor: '#ffffff'}}>
        	<StatusBar backgroundColor='#1cd1c8'/>

			<View style={estilos.logoServico}>
				<Image source={detalheServico} />
				<Text style={estilos.txtLogo}>Nossos Serviços</Text>
			</View>
			
			<View style={{marginTop: 40}}>
				<Text style={estilos.txtServico}>- Consultoria</Text>
				<Text style={estilos.txtServico}>- Processos</Text>
				<Text style={estilos.txtServico}>- Acompanhamento de projetos</Text>
			</View>

      	</View>
    );

}

const estilos = {
	logoServico: {
		flexDirection: 'row',
		padding: 10
	},
	txtLogo: {
		fontSize: 30,
		marginTop: 25,
		marginLeft: 15,
		color: '#1cd1c8'
	},
	txtServico: {
		fontSize: 20,
		marginLeft: 15,
		marginTop: 10
	}
}

export default CenaServicos;