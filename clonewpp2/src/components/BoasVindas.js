import React from 'react';
import { View, Text, Button, ImageBackground, Image } from 'react-native';

export default props => (

	<ImageBackground style={{flex: 1}} source={require('../imgs/bg.png')}>

		<View style={{ flex: 1, padding: 15 }}>

			<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
				<Text style={{ color: '#ffffff', fontSize: 20, padding: 10 }}> Bem vindo ao WhatsApp Clone</Text>
				<Image source={require('../imgs/logo.png')}/>
			</View>

			<View style={{ flex: 1 }}>
				<Button title='Fazer login' color='#115E54' onPress={() => props.navigation.navigate('Login')} />
			</View>

		</View>

	</ImageBackground>

);
