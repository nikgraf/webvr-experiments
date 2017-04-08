import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  View,
  Model,
  AmbientLight,
  PointLight,
  DirectionalLight,
} from 'react-vr';
import Forest from './components/Forest';
import Tree from './components/Tree';

export default class HelloWorld extends React.Component {
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
        <Model
          source={{ obj: asset('plane.obj'), mtl: asset('plane.mtl') }}
          lit
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

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
