import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground, ActivityIndicator, Image, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUser, showPsswrdOnOff } from '../actions/AutenticacaoActions';

class Login extends Component {

	_autenticarUser() {
		const { email, senha, navigation } = this.props;

		this.props.autenticarUser({ email, senha, navigation });
	}

	renderBtnAcessar(){

		if(this.props.loading_login) {
			return(
				<ActivityIndicator size='large' />
			)
		}

		return (
			<Button color='#115E54' title='Acessar' onPress={() => this._autenticarUser()} />
		)
	}

	render(){
		return (
			<ImageBackground style={{flex: 1}} source={require('../imgs/bg.png')}>
				<View style={{ flex: 1, padding: 10 }}>
					<StatusBar backgroundColor='#115E54'/>
					<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ fontSize: 25, color: '#fff' }}>Whats App Clone</Text>
					</View>
					
					<View style={{ flex: 3, justifyContent: 'center' }}>
						<View style={{ borderBottomWidth: 0.7, padding: 5 }}>
							<TextInput 
								value={this.props.email} 
								style={{ fontSize: 20, height: 45 }} 
								placeholder='E-mail' placeholderTextColor='#fff' 
								onChangeText={texto => this.props.modificaEmail(texto)}
							/>
						</View>
						<View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.7, alignItems: 'center', padding: 5 }}>
							<TextInput 
								secureTextEntry={this.props.show_psswrd} 
								value={this.props.senha} 
								style={{ fontSize: 20, height: 45, width: 250}} 
								placeholder='Senha' 
								placeholderTextColor='#fff' 
								onChangeText={texto => this.props.modificaSenha(texto)}
							/>
							<TouchableOpacity onPress={() => this.props.showPsswrdOnOff()}>
								<Image source={require('../imgs/olho.png')} resizeMethod= 'resize'/>
							</TouchableOpacity>
						</View>

						<Text style={{color:'#ec0006'}}>
							{this.props.loginErro}
						</Text>

						<TouchableOpacity onPress={() => this.props.navigation.navigate('Cadastro')}>
							<Text style={{ fontSize: 20, color:'#fff' }}>Não é cadastrado? Cadastre-se aqui</Text>
						</TouchableOpacity>
					</View>

					<View style={{ flex: 2 }}>
						{this.renderBtnAcessar()}
					</View>

				</View>
			</ImageBackground>
		);
	}
}

const mapStateToProps = state => ({
	email: state.AutenticacaoReducer.email,
	senha: state.AutenticacaoReducer.senha,
	loginErro: state.AutenticacaoReducer.loginErro,
	loading_login: state.AutenticacaoReducer.loading_login,
	show_psswrd: state.AutenticacaoReducer.show_psswrd
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUser, showPsswrdOnOff })(Login);
