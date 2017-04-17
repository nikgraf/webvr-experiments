import React from 'react';
import {
  AmbientLight,
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Plane,
  Text,
  View,
} from 'react-vr';

export default class Island extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')} />
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}
        >
          hello
        </Text>
        <AmbientLight intensity={0.9} />
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
      </View>
    );
  }
}

AppRegistry.registerComponent('Island', () => Island);
