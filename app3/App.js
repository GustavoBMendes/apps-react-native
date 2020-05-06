/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import ListaItens from './src/components/ListaItens';


export default class App extends Component {
  
  render(){
    return(
      <ListaItens />
    );
  }

}
