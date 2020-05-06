import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './components/Menu';
import sobreJogo from './components/sobre_jogo';
import outrosJogos from './components/outrosJogos';
import Resultado from './components/Resultado';

const Stack = createStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator initialRouteName='Menu'>
		  <Stack.Screen 
			name='Menu'
			component={Menu}
			options={{
				headerTitleAlign: 'center'
			}}
		  />
		  <Stack.Screen 
			name='Outros Jogos'
			component={outrosJogos}
			options={{
				headerTitleAlign: 'center'
			}}
		  />
		  <Stack.Screen 
			name='Sobre o jogo'
			component={sobreJogo}
			options={{
				headerTitleAlign: 'center'
			}}
		  />
		  <Stack.Screen 
			name='Resultado'
			component={Resultado}
			options={{
				headerTitleAlign: 'center'
			}}
		  />
		</Stack.Navigator>
	);
};