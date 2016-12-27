import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Mesh,
  View,
  PointLight,
  AmbientLight,
} from 'react-vr';
import Tree from './components/Tree';

class World extends Component {
  render() {
    return (
      <View>
        <AmbientLight intensity={0.4} />
        <PointLight style={{ color:'white', transform:[{translate : [0, 400, 700]}]}} />
        <Pano source={asset('heaven.png')}/>
        <Tree
          style={{
            transform: [
              {translate: [0, -1, -5]},
            ]
          }}
        />
        <Tree
          style={{
            transform: [
              {translate: [5, -1, -5]},
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
