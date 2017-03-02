import React from 'react';
import {
  AmbientLight,
  PointLight,
  DirectionalLight,
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import Playground from './components/Playground';

class v1 extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={0.85} />
        <PointLight
          intensity={0.35}
          style={{ color:'white', transform:[{translate : [0, 600, 300]}]}}
        />
        <DirectionalLight
          intensity={0.1}
          style={{ transform:[{translate : [0, -600, -300]}]}}
        />
        <Pano source={asset('chess-world.jpg')}/>
        <Playground />
      </View>
    );
  }
};

AppRegistry.registerComponent('v1', () => v1);
