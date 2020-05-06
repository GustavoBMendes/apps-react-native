import React from 'react';
import { Icon } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/FormLogin';
import Cadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AddCont from './components/AdicionarContato';
import TabBar from './components/TabBarMenu';
import Conversa from './components/Conversa';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Routes() {

	return (
		<Stack.Navigator 
			initialRouteName='Login'
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