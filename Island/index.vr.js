import React from 'react';
import {
  AmbientLight,
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

const spaceSkymap = [
  asset('space/space_right.png'),
  asset('space/space_left.png'),
  asset('space/space_up.png'),
  asset('space/space_down.png'),
  asset('space/space_back.png'),
  asset('space/space_front.png'),
];

export default class Island extends React.Component {
  render() {
    return (
      <View>
        <Pano source={spaceSkymap} />
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
        <AmbientLight intensity={0.1} />
        <Plane
          width={500}
          height={500}
          lit={true}
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
        <Sphere
          widthSegments={20}
          heightSegments={20}
          radius={8}
          style={{
            color: '#dbcaac',
            transform: [
              {
                translate: [0, 20, -200],
              },
            ],
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Island', () => Island);
