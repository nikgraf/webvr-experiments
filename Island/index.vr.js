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
          width={5}
          height={5}
          lit={true}
          style={{
            backgroundColor: '#00ff00',
            transform: [
              {
                translateZ: -3,
                rotateY: 45,
              },
            ],
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('Island', () => Island);
