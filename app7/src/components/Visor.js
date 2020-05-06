import React from 'react';
import { View, TextInput } from 'react-native';

export default props => (
	<View>
		<TextInput placeholder='Resultado' editable={false} value={props.resultado} style={estilo.input}/>
	</View>
);

const estilo = {
	input: {
		height: 100,
		fontSize: 30,
		borderBottomWidth: 1.5,
		borderColor: '#cacaca'
	}
};
