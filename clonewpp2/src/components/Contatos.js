import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { contatosUsuariosFetch } from '../actions/AppActions';
import _ from 'lodash';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';



function Item({ title, email }) {
	const navigation = useNavigation();
	return (
		<TouchableOpacity onPress={() => navigation.navigate('Conversa', { contatoNome: title, contatoEmail: email })}>
			<View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#CCC' }}>
				<Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
}

class Contatos extends Component {

	UNSAFE_componentWillMount() {
		this.props.contatosUsuariosFetch();
		this.criaFonteDeDados(this.props.contatos);
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		this.criaFonteDeDados(nextProps.contatos);
	}

	criaFonteDeDados(contatos) {
		this.fonteDeDados = contatos;
	}

	render(){
		return (
			<SafeAreaView>
				<FlatList 
					data={this.fonteDeDados}
					renderItem={ ({ item }) => <Item title={item.nome} email={item.email} /> }
					keyExtractor={item => item.email}
				/>
			</SafeAreaView>
		);
	}
}

const mapStateToProps = state => {

	const contatos = _.map(state.ListaContatosReducer, (val, uid) => {
		return { ...val, uid }
	})
	return {contatos}

}

export default connect(mapStateToProps, { contatosUsuariosFetch })(Contatos);
