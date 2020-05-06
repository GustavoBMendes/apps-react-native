import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { TouchableOpacity } from 'react-native-gesture-handler';


const TabBarMenu = props => {
	return(
		<View style={{ backgroundColor: "#115E54", elevation: 0, marginBottom: 6 }}>

			<StatusBar backgroundColor="#115E54"/>

			<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

				<View style={{ height: 50, justifyContent: 'center' }}>
					<Text style={{ color: '#fff', fontSize: 20, marginLeft: 20 }}>WhatsApp Clone</Text>
				</View>

				<View style={{ flexDirection: 'row', marginRight: 20 }}>

					<View style={{ justifyContent: 'center', width: 50, alignItems: 'center' }}>

						<TouchableOpacity onPress={() => props.navigation.navigate('AddCont')}>
							<Image source={require('../imgs/add_contato.png')} />
						</TouchableOpacity>

					</View>

					<View style={{ justifyContent: 'center' }}>
						<Text style={{ fontSize: 20, color: '#fff' }}>Sair</Text>
					</View>

				</View>

			</View>

			<TabBar {...props} style={{ backgroundColor: "#115E54", elevation: 0}} />

		</View>
	);
	
}
