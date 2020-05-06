import { MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO, ADICIONA_CONTATO_SUCESSO, MODIFICA_MENSAGEM, ENVIA_MSG_SUCESSO } from '../actions/types';

const INITIAL_STATE = {
	add_contato_email: '',
	cadastro_resultado_erro: '',
	cadastro_resultado_inclusao: false,
	mensagem: ''
};

export default (state = INITIAL_STATE, action) => {

	switch(action.type) {

		case MODIFICA_ADICIONA_CONTATO_EMAIL:
			return { ...state, add_contato_email: action.payload }

		case ADICIONA_CONTATO_ERRO:
			return { ...state, cadastro_resultado_erro: action.payload }

		case ADICIONA_CONTATO_SUCESSO:
			return { ...state, cadastro_resultado_erro: '', cadastro_resultado_inclusao: action.payload, add_contato_email: '' }

		case MODIFICA_MENSAGEM:
			return { ...state, mensagem: action.payload }

		case ENVIA_MSG_SUCESSO:
			return { ...state, mensagem: '' }

		default:
			return state;
	}

}