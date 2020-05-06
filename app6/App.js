/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';

export default function CenaPrincipal() {
  return(
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
