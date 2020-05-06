import React, {Component} from 'react';
import { View, Image } from 'react-native';

class Topo extends Component{
	render(){
	  return(
		<View>
		  <Image source={ require('../../img/original.png') } style={{width: 425, height: 225}}/>
		</View>
	  );
	}
}

export default Topo;