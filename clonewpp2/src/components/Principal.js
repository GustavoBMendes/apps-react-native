import * as React from 'react';
import { StyleSheet, Dimensions, Text, View, StatusBar, Image } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { habilitaInclusaoContato } from '../actions/AppActions';
import firebase from 'firebase';

import Conversas from './Conversas';
import Contatos from './Contatos';

const initialLayout = { width: Dimensions.get('window').width };

function Principal({navigation}, props) {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Conversas' },
    { key: 'second', title: 'Contatos' },
  ]);

  const renderScene = SceneMap({
    first: Conversas,
    second: Contatos,
  });

  const habilita = () => props.habilitaInclusaoContato();

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      renderTabBar={ props => 
        <View style={{ backgroundColor: "#115E54", elevation: 0, marginBottom: 6 }}>

          <StatusBar backgroundColor="#115E54"/>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <View style={{ height: 50, justifyContent: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 20, marginLeft: 20 }}>WhatsApp Clone</Text>
            </View>

            <View style={{ flexDirection: 'row', marginRight: 20 }}>

              <View style={{ justifyContent: 'center', width: 50, alignItems: 'center' }}>

                <TouchableOpacity onPress={() => { navigation.navigate('AddCont'); habilita; }} >
                  <Image source={require('../imgs/add_contato.png')} />
                </TouchableOpacity>

              </View>

              <View style={{ justifyContent: 'center' }}>
                <TouchableOpacity onPress={ () => firebase.auth().signOut().then(() => { navigation.navigate('Login') }) }>
                  <Text style={{ fontSize: 20, color: '#fff' }}>Sair</Text>
                </TouchableOpacity>
              </View>

            </View>

          </View>

          <TabBar {...props} style={styles.tab_bar}/> 

        </View>  
      }

    />
  );
}

export default connect(null, { habilitaInclusaoContato })(Principal);

const styles = StyleSheet.create({
  tab_bar: {
    elevation: 0,
    backgroundColor: '#115E54'
  },
});
