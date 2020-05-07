import firebase from 'firebase';
import b64 from 'base-64';
import {
	MODIFICA_EMAIL,
	MODIFICA_SENHA,
	MODIFICA_NOME,
	SHOW_PASSWORD,
	SUCESSO_CADASTRO,
	ERRO_CADASTRO,
	LOGIN_ERRO,
	LOGIN_SUCESSO,
	CARREGANDO_LOGIN,
	CARREGANDO_CADASTRO
} from './types';

export const modificaEmail = (texto) => {
	return {
		type: MODIFICA_EMAIL,
		payload: texto
	}
}

export const modificaSenha = (texto) => {
	return {
		type: MODIFICA_SENHA,
		payload: texto
	}
}

export const modificaNome = (texto) => {
	return {
		type: MODIFICA_NOME,
		payload: texto
	}
}

export const showPsswrdOnOff = () => {
	return {
		type: SHOW_PASSWORD
	}
}

export const cadastraUsuario = ({ nome, email, senha, navigation }) => {
	
	return dispatch => {
	
		dispatch({ type: CARREGANDO_CADASTRO })

		firebase.auth().createUserWithEmailAndPassword(email, senha)
			.then(user => {
				let emailb64 = b64.encode(email);
				firebase.database().ref('/contatos/'+emailb64)
					.push({ nome })
					.then( value => cadastroSucesso(dispatch, navigation) )
			})
			.catch(erro => cadastroErro(erro, dispatch));

	}

}

const cadastroSucesso = ( dispatch, navigation ) => {
	dispatch ({	type: SUCESSO_CADASTRO, payload: 'Sucesso' });

	navigation.navigate('BoasVindas');
}

const cadastroErro = (erro, dispatch) => {
	dispatch ({ type: ERRO_CADASTRO, payload: erro.message });
}

export const autenticarUser = ({ email, senha, navigation }) => {
	
	return dispatch => {

		dispatch({ type: CARREGANDO_LOGIN })

		firebase.auth().signInWithEmailAndPassword(email, senha)
			.then(value => loginSucesso(dispatch, navigation))
			.catch(erro => loginErro(erro, dispatch));
	}

}

const loginSucesso = (dispatch, navigation) => {

	dispatch ({
		type: LOGIN_SUCESSO
	})

	navigation.navigate('Principal');

}

const loginErro = (erro, dispatch) => {

	dispatch ({
		type: LOGIN_ERRO,
		payload: erro.message
	})

}
