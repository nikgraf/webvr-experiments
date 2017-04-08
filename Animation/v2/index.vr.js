import React from 'react';
import {
  Animated,
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import Intro from './components/Intro';
import MovingText from './components/MovingText';

const spaceSkymap = [
  asset('space/space_right.png'),
  asset('space/space_left.png'),
  asset('space/space_up.png'),
  asset('space/space_down.png'),
  asset('space/space_back.png'),
  asset('space/space_front.png'),
];

export default class World extends React.Component {
  render() {
    return (
      <View>
        <Pano source={spaceSkymap} />
        <Intro />
        <Animated.View
          style={{
            transform: [
              {rotateX: -60},
            ]
          }}
        >
          <MovingText />
        </Animated.View>
      </View>
    );
  }
};

AppRegistry.registerComponent('World', () => World);
