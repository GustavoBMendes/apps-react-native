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
} from '../actions/types';

const INITIAL_STATE = {
	nome: '',
	email: '',
	senha: '',
	cadastroErro: '',
	loginErro: '',
	loading_login: false,
	loading_cadastro: false,
	show_psswrd: true,
};

export default ( state = INITIAL_STATE, action ) => {
	console.log(action);

	switch(action.type){
		case MODIFICA_EMAIL:
			return { ...state, email: action.payload };

		case MODIFICA_SENHA:
			return { ...state, senha: action.payload };

		case MODIFICA_NOME:
			return { ...state, nome: action.payload };

		case SHOW_PASSWORD:
			if(state.show_psswrd == true) {
				return { ...state, show_psswrd: false };
			}
			return { ...state, show_psswrd: true };

		case SUCESSO_CADASTRO:
			return { ...state, nome: '', senha: '', loading_cadastro: false }

		case ERRO_CADASTRO:
			return { ...state, cadastroErro: action.payload, loading_cadastro: false };

		case LOGIN_ERRO:
			return { ...state, loginErro: action.payload, loading_login: false };

		case LOGIN_SUCESSO:
			return { ...state, ...INITIAL_STATE}

		case CARREGANDO_LOGIN:
			return { ...state, loading_login: true };

		case CARREGANDO_CADASTRO:
			return { ...state, loading_cadastro: true };

		default:
			return state;
	}

}