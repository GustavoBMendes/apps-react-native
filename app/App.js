/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

export default class App extends Component {

  constructor(props){
    super(props);

    this.state = { escolhaUsr: '', escolhaPc: '', resultado: '' };
  }

  jokenpo(escolhaUsrJogo){
    let opcoesPc = Array();
    opcoesPc[0] = "pedra";
    opcoesPc[1] = "papel";
    opcoesPc[2] = "tesoura";

    let escolhaRandom = Math.random();
    escolhaRandom = Math.floor(escolhaRandom * 3);
    let escolhaPcJogo = opcoesPc[escolhaRandom];

    this.setState({ escolhaUsr: escolhaUsrJogo,
                    escolhaPc: escolhaPcJogo });

    if (escolhaUsrJogo === "pedra" && escolhaPcJogo === "tesoura" 
    || escolhaUsrJogo === "papel" && escolhaPcJogo === "pedra"
    || escolhaUsrJogo === "tesoura" && escolhaPcJogo === "papel") {
      this.setState({ resultado : "Você ganhou!" });
    }

    else if (escolhaUsrJogo === "pedra" && escolhaPcJogo === "pedra"
    || escolhaUsrJogo === "tesoura" && escolhaPcJogo === "tesoura"
    || escolhaUsrJogo === "papel" && escolhaPcJogo === "papel") {
      this.setState({ resultado : "Empate!"});
    }

    else {
      this.setState({ resultado : "Voce perdeu!"});
    }

  }

  render() {
    return (
      <View>

        <Topo />

        <View style={styles.painelAccess}>

          <View style={styles.btn}>
            <Button title="Pedra" onPress={() => {this.jokenpo("pedra")}}/>
          </View>
          <View style={styles.btn}>
            <Button title="Papel" onPress={() => {this.jokenpo("papel")}}/>
          </View>
          <View style={styles.btn}>
            <Button title="Tesoura" onPress={() => {this.jokenpo("tesoura")}}/>
          </View>
          
        </View>

        <View style={styles.palco}>
        
          <Icone escolha={this.state.escolhaPc} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsr} jogador='Jogador' />
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 90,
    margin: 10
  },
  painelAccess: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  palco: {
    alignItems: 'center',
    margin: 10
  },

  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red'
  },

  icone: {
    margin: 20,
    alignItems: 'center'
  },

  txtUsuario: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
