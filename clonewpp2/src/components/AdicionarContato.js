import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { modificaAdicionaContatoEmail, adiciona_contato, habilitaInclusaoContato } from '../actions/AppActions';


class AddCont extends Component {

	renderAdicionarContato() {
		return (
			<View style={{ flex: 1 }}>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<TextInput 
						placeholder='Insira o e-mail do contato'
						style={{ fontSize: 20, height: 45, margin: 20 }}
						onChangeText={(texto) => this.props.modificaAdicionaContatoEmail(texto)}
						value={this.props.add_contato_email}
					/>
				</View>

				<View style={{ flex: 1 }}>
					<Button 
						title='Adicionar' 
						color='#115E54' 
						onPress={() => this.props.adiciona_contato(this.props.add_contato_email)} 
					/>

					<Text style={{ color: '#ff0000', fontSize: 20 }}>
						{this.props.cadastro_resultado_erro}
					</Text>

				</View>
			</View>
		);
	}

	render() {
		return (
			<View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
				
				{this.renderAdicionarContato()}
				
			</View>
		);
	}
}

const mapStateToProps = state => ({
	add_contato_email: state.AppReducer.add_contato_email,
	cadastro_resultado_erro: state.AppReducer.cadastro_resultado_erro,
	cadastro_resultado_inclusao: state.AppReducer.cadastro_resultado_inclusao
})

export default connect(mapStateToProps, { modificaAdicionaContatoEmail, adiciona_contato, habilitaInclusaoContato })(AddCont);
