import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { conversasUsuarioFetch } from '../actions/AppActions';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function Cabecalho({ item }) {
	const navigation = useNavigation();
	console.log('LISTA CONVERSAS', item.nome);
	console.log('LISTA CONVERSAS', item.contatoEmail);
	console.log(' ');
	return(
		<TouchableOpacity onPress={() => navigation.navigate('Conversa', { contatoNome: item.nome, contatoEmail: item.contatoEmail })}>
			<View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.nome}</Text>
				<Text style={{ fontSize: 15, color: '#8d8d8d' }}>{item.mensagem}</Text>
			</View>
		</TouchableOpacity>
	);

}	

class Conversas extends Component {
	
	UNSAFE_componentWillMount() {
		this.props.conversasUsuarioFetch();
		this.criaFonteDeDados(this.props.conversas);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.criaFonteDeDados(nextProps.conversas);
	}

	criaFonteDeDados(conversas) {
		this.dataSource = conversas;
	}

	render() {

		return (
			<View >
				<FlatList
					data={this.dataSource}
					renderItem={ ({ item }) => <Cabecalho item={item} /> }
				/>
			</View>
		);
	}
	
}

const mapStateToProps = state => {
	const conversas = _.map(state.ListaConversasReducer, (val, uid) => {
		return { ...val, uid };
	});

	return {
		conversas
	}
}

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);
