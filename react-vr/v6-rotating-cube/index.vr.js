import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  View,
  Model,
  PointLight,
} from 'react-vr';
import RotatingCube from './components/RotatingCube.js';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <View>
        <RotatingCube />
        <PointLight
          style={{color: 'white', transform: [{translate: [0, 400, 700]}]}}
        />
        <Pano source={asset('chess-world.jpg')} />
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
