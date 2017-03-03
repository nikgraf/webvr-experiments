import React from 'react';
import {
  Animated,
  AmbientLight,
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import World from './components/World';
import Asteroid01 from './components/Asteroid01';
import Cockpit from './components/Cockpit';

const AnimatedWorld = Animated.createAnimatedComponent(World);

class v1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      z: new Animated.Value(-28),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.z,
      {
        duration: 10000,
        toValue: 0,
      }
    ).start();
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={0.85} />
        <Pano source={
          {
            uri: [
              '../static_assets/space/space_right.png',
              '../static_assets/space/space_left.png',
              '../static_assets/space/space_up.png',
              '../static_assets/space/space_down.png',
              '../static_assets/space/space_back.png',
              '../static_assets/space/space_front.png'
            ]
          }
        }/>
        <Cockpit
          style={{
            transform: [
              {scale: 1},
              {translate: [0, 0, 1]},
            ]
          }}
        />
        <Animated.View
          style={{
            transform: [
              {translateX: this.state.x},
              {translateY: this.state.y},
              {translateZ: this.state.z},
            ]
          }}
        >
          <AnimatedWorld />
        </Animated.View>
      </View>
    );
  }
};

AppRegistry.registerComponent('v1', () => v1);
