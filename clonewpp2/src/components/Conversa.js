/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import _ from 'lodash';
import { modificaMensagem, enviarMensagem, conversaUsuarioFetch } from '../actions/AppActions';

function Item({ title }) {
	
	if(title.tipo == 'e') {
		return (
			<View style={{ alignItems: 'flex-end', marginTop: 5, marginBottom: 5, marginLeft: 40 }}>
				<Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#dbf5b4', elevation: 1 }}>
					{title.mensagem}
				</Text>
			</View>
		);
	}
	return (
		<View style={{ alignItems: 'flex-start', marginTop: 5, marginBottom: 5, marginRight: 40 }}>
			<Text style={{ fontSize: 18, color: '#000', padding: 10, backgroundColor: '#f7f7f7', elevation: 1}}>
				{title.mensagem}
			</Text>
		</View>
	);
}

class Conversa extends Component {

	UNSAFE_componentWillMount() {
		const { route } = this.props;
		const { contatoEmail } = route.params;
		console.log(contatoEmail);
		this.props.conversaUsuarioFetch(contatoEmail);
		this.criaFonteDeDados(this.props.conversa);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.criaFonteDeDados(nextProps.conversa);
	}

	criaFonteDeDados(conversa) {
		this.dataSource = conversa;
	}

	_enviarMensagem(){
		const { route } = this.props;
		const { contatoNome, contatoEmail } = route.params;
		const { mensagem } = this.props;
		console.log(contatoEmail);
		console.log(contatoNome);
		this.props.enviarMensagem(mensagem, contatoNome, contatoEmail);
	}

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#eee4dc', padding: 10 }}>
				<View style={{ flex: 1, paddingBottom: 20 }}>
						<FlatList 
							data={this.dataSource}
							renderItem={ ({ item }) => <Item title={item}/> }
						/>
				</View>

				<View style={{ flexDirection: 'row', height: 60 }}>
					<TextInput 
						value={this.props.mensagem}
						onChangeText={texto => this.props.modificaMensagem(texto)}
						placeholder='Envie uma mensagem!' 
						style={{ flex: 4, backgroundColor:'#fff', fontSize: 18 }}
					/>
					<TouchableOpacity onPress={() => this._enviarMensagem()}>
						<Image source={require('../imgs/enviar_mensagem.png')}/>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const mapStateToProps = state => {

	const conversa = _.map(state.ListaConversaReducer, (val, uid) => {
		return {...val, uid};
	});
	return ({
		mensagem: state.AppReducer.mensagem,
		conversa
	})

}

export default connect(mapStateToProps, { modificaMensagem, enviarMensagem, conversaUsuarioFetch })(Conversa);
