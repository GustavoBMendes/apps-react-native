/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import CenaClientes from './CenaClientes';
import CenaContato from './CenaContato';
import CenaEmpresa from './CenaEmpresa';
import CenaServicos from './CenaServicos';
import { TouchableHighlight } from 'react-native-gesture-handler';

const logo = require('../imagens_app5/logo.png');
const menuEmpresa = require('../imagens_app5/menu_empresa.png');
const menuServico = require('../imagens_app5/menu_servico.png');
const menuCliente = require('../imagens_app5/menu_cliente.png');
const menuContato = require('../imagens_app5/menu_contato.png');

function CenaPrincipal({ navigation }) {

    return(
		<View style={{flex: 1, backgroundColor: '#ffffff'}}>
        	<StatusBar backgroundColor='#CCC'/>

			<View style={estilo.logo}>
				<Image source={logo} />
			</View>

			<View style={estilo.cenas}>	
				<TouchableHighlight onPress={() => navigation.navigate('Clientes')}>
					<Image source={menuCliente} />
				</TouchableHighlight>
				<TouchableHighlight onPress={() => navigation.navigate('Contato')}>
					<Image source={menuContato} />
				</TouchableHighlight>
			</View>

			<View style={estilo.cenas}>
				<TouchableHighlight onPress={() => navigation.navigate('Empresa')}>
					<Image source={menuEmpresa} />
				</TouchableHighlight>
				<TouchableHighlight onPress={() => navigation.navigate('Servico')}>
					<Image source={menuServico} />
				</TouchableHighlight>
			</View>

      	</View>
    );

}

const Stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
		<Stack.Screen 
			name="Home" 
			component={CenaPrincipal} 
			options = {{
				title: "ATM Consultoria",
				headerStyle: {
					backgroundColor: '#CCC'
				},
				headerTintColor: 'black',
			}}
		/>
		<Stack.Screen 
			name="Clientes" 
			component={CenaClientes} 
			options = {{
				title: "ATM Consultoria",
				headerStyle: {
					backgroundColor: '#B9C941'
				},
				headerTintColor: 'black',
			}}
		/>
		<Stack.Screen 
			name="Contato"
			component={CenaContato}
			options = {{
				title: "ATM Consultoria",
				headerStyle: {
					backgroundColor: '#61BD8C'
				},
				headerTintColor: 'black',
			}}
		/>
		<Stack.Screen 
			name="Empresa"
			component={CenaEmpresa}
			options = {{
				title: "ATM Consultoria",
				headerStyle: {
					backgroundColor: '#EC7148'
				},
				headerTintColor: 'black',
			}}
		/>
		<Stack.Screen 
			name="Servico"
			component={CenaServicos}
			options = {{
				title: "ATM Consultoria",
				headerStyle: {
					backgroundColor: '#1cd1c8'
				},
				headerTintColor: 'black',
			}}
		/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const estilo = {
	logo: {
		alignItems: 'center',
		margin: 30
	},
	cenas: {
		justifyContent: 'space-around',
		flexDirection: 'row',
		margin: 10,
		padding: 20
	}
}

export default App;