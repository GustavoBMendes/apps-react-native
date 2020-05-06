/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const logo = require('../imgs/logo.png');
const btn_jogar = require('../imgs/botao_jogar.png');
const outros_Jogos = require('../imgs/outros_jogos.png');
const sobre_Jogo = require('../imgs/sobre_jogo.png');

export default function Menu({ navigation }) {

  const {cenaPrincipal, jogar, rodape} = estilo;

  function toOutrosJogos(){
    navigation.navigate('Outros Jogos');
  }

  function toSobreJogo(){
    navigation.navigate('Sobre o jogo');
  }

  function result(){
    navigation.navigate('Resultado');
  }

  return (
    <View style={cenaPrincipal}>

      <View style={jogar}>
        <Image source={logo}/>
        <TouchableHighlight onPress={result}>
          <Image source={btn_jogar} />
        </TouchableHighlight>
      </View>

      <View style={rodape}>
        
        <TouchableHighlight onPress={toOutrosJogos}>
          <Image source={outros_Jogos} />
        </TouchableHighlight>
        
        <TouchableHighlight onPress={toSobreJogo}>
          <Image source={sobre_Jogo} />
        </TouchableHighlight>
      
      </View>

    </View>
  );
};

const estilo = {

  cenaPrincipal: {
    flex: 1,
    backgroundColor: '#61BD8C'
  },

  jogar: {
    alignItems: 'center',
    flex: 10,
    justifyContent: 'center'
  },

  rodape:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  }

}
