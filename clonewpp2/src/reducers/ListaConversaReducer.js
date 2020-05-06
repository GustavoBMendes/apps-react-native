import { LISTA_CONVERSA_USUARIO } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case LISTA_CONVERSA_USUARIO:
			console.log(action.payload);
			return action.payload;
		default:
			return state;
	}
}