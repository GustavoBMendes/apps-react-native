import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from './FirebaseArq';
//import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import Routes from './src/Routes';

function App() {
    /*
    let firebaseConfig = {
      apiKey: 'AIzaSyDM8HWWg322qtG5VUlqPw-gamy7Umn_1jA',
      authDomain: 'wppclone-ad57d.firebaseapp.com',
      databaseURL: 'https://wppclone-ad57d.firebaseio.com',
      projectId: 'wppclone-ad57d',
      storageBucket: 'wppclone-ad57d.appspot.com',
      messagingSenderId: '161840787955',
      appId: '1:161840787955:web:f34ad8a0489d3e08cae286',
      measurementId: 'G-YEM5GT6S8S',
    };
    // Initialize Firebase
    //firebase.initializeApp(firebaseConfig);

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    */
   firebase;
    return (
      <NavigationContainer>
        <Provider
          store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Routes />
        </Provider>
      </NavigationContainer>
    );
}

export default App;
