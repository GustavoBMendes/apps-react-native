/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';

const Estilos = {

  estiloView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center"
  },

  estiloTexto: {
    fontSize: 20,
    color: "white"
  },

  butao: {
    backgroundColor: "#538530",
    paddingVertical: 5,
    paddingHorizontal: 20,
    marginTop: 15
  }

}

const pressBttn = () => {
  var numAleatorio = Math.random();
  numAleatorio = Math.floor(numAleatorio * 5);

  var frases = Array();

  frases[0] = "Meus parabéns.";
  frases[1] = "Nem cavalo aguenta."
  frases[2] = "Habib és."
  frases[3] = "Quer mídia minha amigo?"
  frases[4] = "Que Deus perdoe essas pessoas ruins."

  Alert.alert(frases[numAleatorio]);
}

export default class App extends Component {
  
  render(){
    const { estiloView, estiloTexto, butao } = Estilos;
    return(
      <View style={estiloView}>
          <Image source={require('./img/logo.png')} />
          <TouchableOpacity style={butao} onPress={pressBttn}>
            <Text style={estiloTexto}>Nova Frase</Text>
          </TouchableOpacity>
      </View>
    );
  }

}