import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Mesh,
  View,
  Scene,
  PointLight,
  AmbientLight,
  DirectionalLight,
} from 'react-vr';
import Forest from './components/Forest';

class World extends Component {
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
        <Pano source={asset('heaven.png')}/>
        <Forest
          style={{
            transform: [
              {translate: [-35, -1, -35]},
            ]
          }}
        />
        <Mesh
          source={{ mesh: asset('plane.obj'), mtl: asset('plane.mtl'), lit: true }}
          style={{
            transform: [
              {scale: [1, 1, 1]},
              {translate: [0, -1, 0]},
            ]
          }}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('hello_world', () => World);
