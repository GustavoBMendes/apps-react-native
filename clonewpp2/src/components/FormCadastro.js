import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificaNome, cadastraUsuario } from '../actions/AutenticacaoActions';

class cadastro extends Component {
	
	_cadastraUsuario(){

		const { nome, email, senha, navigation } = this.props;

		this.props.cadastraUsuario({ nome, email, senha, navigation });

	}

	renderBtnCadastro(){

		if(this.props.loading_cadastro){
			return(
				<ActivityIndicator size='large' />
			)
		}

		return(
			<Button title='Cadastrar' color='#115E54' onPress={() => this._cadastraUsuario()}/>
		)

	}

	render(){
		return(
			<ImageBackground style={{flex: 1}} source={require('../imgs/bg.png')}>
				<View style={{ flex: 1, padding: 15 }}>

					<View style={{ flex: 4, justifyContent: 'center' }}>
						<TextInput 
							value={this.props.nome} 
							style={{fontSize: 20, height: 45}} 
							placeholder='Nome' 
							placeholderTextColor='#fff' 
							onChangeText={ texto => this.props.modificaNome(texto) }
						/>
						<TextInput 
							value={this.props.email} 
							style={{fontSize: 20, height: 45}} 
							placeholder='E-mail' 
							placeholderTextColor='#fff' 
							onChangeText={ texto => this.props.modificaEmail(texto) }
						/>
						<TextInput 
							secureTextEntry={true} 
							value={this.props.senha} 
							style={{fontSize: 20, height: 45}} 
							placeholder='Senha' 
							placeholderTextColor='#fff' 
							onChangeText={ texto => this.props.modificaSenha(texto) }
						/>

						<Text style={{ color:'#ec0006' }}>{this.props.cadastroErro}</Text>

					</View>

					<View style={{ flex: 1 }}>
						{this.renderBtnCadastro()}
					</View>

				</View>
			</ImageBackground>
		);
	}

}

const mapStateToProps = state => ({
	nome: state.AutenticacaoReducer.nome,
	email: state.AutenticacaoReducer.email,
	senha: state.AutenticacaoReducer.senha,
	cadastroErro: state.AutenticacaoReducer.cadastroErro,
	loading_cadastro: state.AutenticacaoReducer.loading_cadastro
});

export default connect(mapStateToProps, { modificaEmail, modificaSenha, modificaNome, cadastraUsuario })(cadastro);
