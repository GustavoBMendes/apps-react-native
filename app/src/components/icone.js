import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({

	icone: {
	  margin: 20,
	  alignItems: 'center'
	},

});

class Icone extends Component{
	//this.props.escolha
	//this.props.jogador
  
	render(){
	  if(this.props.escolha == 'pedra'){
		return(
		  <View style={styles.icone}>
			<Text style={styles.txtUsuario}>{this.props.jogador}</Text>
			<Image source={require('../../img/pedra.png')}/>
		  </View>
		);
	  }
	  else if(this.props.escolha == 'papel'){
		return(
		  <View style={styles.icone}>
			<Text style={styles.txtUsuario}>{this.props.jogador}</Text>
			<Image source={require('../../img/papel.png')}/>
		  </View>
		);
	  }
	  else if(this.props.escolha == 'tesoura'){
		return(
		  <View style={styles.icone}>
			<Text style={styles.txtUsuario}>{this.props.jogador}</Text>
			<Image source={require('../../img/tesoura.png')}/>
		  </View>
		);
	  }
	  else{
		return false;
	  }
	}
}

export default Icone;