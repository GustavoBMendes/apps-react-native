/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

const estilo = {

  item: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: '#16befe'
  },

  descricao: {
    flex: 1,
    marginLeft: 20
  },

  txtTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#16befe'
  }

}

export default class ListaItens extends Component {
  
  render(){
    return(
      <View style={estilo.item}>

        <View>
          <Image style={{height: 100, width: 100}} source={{ uri: this.props.item.foto }}/>
        </View>

        <View style={estilo.descricao}>
          <Text style={estilo.txtTitulo}>{this.props.item.titulo}</Text>
          <Text>Valor: R${this.props.item.valor}</Text>
          <Text>Cidade: {this.props.item.local_anuncio}</Text>
          <Text>{this.props.item.data_publicacao}</Text>
        </View>

      </View>
    );
  }

}
