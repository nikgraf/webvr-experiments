import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Mesh,
  View,
  PointLight,
} from 'react-vr';

class hello_world extends React.Component {
  render() {
    return (
      <View>
        <PointLight style={{color:'white', transform:[{translate : [0, 400, 700]}]}} />
        <Pano source={asset('chess-world.jpg')}/>
        <Mesh
          style={{ transform: [
            {translate: [0, -5, -20]},
            {rotateY: -30},
            {rotateX: -40}
          ] }}
          source={{ mesh: asset('cube2.obj'), mtl: asset('cube2.mtl'), lit: true }}
        />
      </View>
    );
  }
};




AppRegistry.registerComponent('hello_world', () => hello_world);
