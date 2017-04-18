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

export default class HelloWorld extends React.Component {
  render() {
    return (
      <View>
        <PointLight
          style={{color: 'white', transform: [{translate: [0, 400, 700]}]}}
        />
        <Pano source={asset('chess-world.jpg')} />
        <Model
          style={{
            transform: [
              {translate: [0, -5, -20]},
              {rotateY: -30},
              {rotateX: -40},
            ],
          }}
          source={{obj: asset('cube2.obj'), mtl: asset('cube2.mtl')}}
          lit
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
