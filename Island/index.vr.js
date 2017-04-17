import React from 'react';
import {
  AppRegistry,
  asset,
  DirectionalLight,
  Pano,
  Plane,
  Sphere,
  StyleSheet,
  Text,
  View,
} from 'react-vr';

export default class Island extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <DirectionalLight
          intensity={0.9}
          style={{
            color: '#ddddff',
            transform: [
              {
                translate: [0, 90, 30],
              },
              {
                rotateX: -90,
              },
            ],
          }}
        />
        <Plane
          width={500}
          height={500}
          lit={true}
          wireframe={false}
          style={{
            color: '#0000ff',
            transform: [
              {
                translateY: -1,
              },
              {
                rotateX: -90,
              },
            ],
          }}
        />
        <Sphere
          widthSegments={20}
          heightSegments={20}
          radius={2.5}
          wireframe={false}
          lit={true}
          style={{
            color: 'yellow',
            transform: [
              {
                translateY: -3,
              },
            ],
          }}
        />

      </View>
    );
  }
}

AppRegistry.registerComponent('Island', () => Island);
