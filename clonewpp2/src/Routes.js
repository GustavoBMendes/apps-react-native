import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import Login from './components/FormLogin';
import Cadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AddCont from './components/AdicionarContato';
import Conversa from './components/Conversa';

const Stack = createStackNavigator();
var tela_inicial = '';

export default class Routes extends Component {

	render() {

		return (
			<Stack.Navigator 
				initialRouteName={tela_inicial}
				screenOptions={{
					headerStyle: {
						backgroundColor: '#115E54'
					},
					headerTintColor: '#fff'
				}}
			>
				
				<Stack.Screen 
					name='Login'
					component={Login}
					options={{headerShown: false}}
				/>
				
				<Stack.Screen
					name='Cadastro'
					component={Cadastro}
				/>

				<Stack.Screen
					name='BoasVindas'
					component={BoasVindas}
					options={{headerShown: false}}
				/>

				<Stack.Screen
					name='Principal'
					component={Principal}
					
					options={{
						headerShown: false
					}}
					
				/>

				<Stack.Screen
					name='AddCont'
					component={AddCont}
					options={{
						title: 'Adicionar Contato'
					}}
				/>

				<Stack.Screen
					name='Conversa'
					component={Conversa}
					options={
						({route}) => ({ title: route.params.contatoNome })
					}
				/>

			</Stack.Navigator>
		);

	}
	
}