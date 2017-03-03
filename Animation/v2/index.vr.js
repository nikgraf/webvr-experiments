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
import Tree from './components/Tree';
const AnimatedWorld = Animated.createAnimatedComponent(World);
const AnimatedTree = Animated.createAnimatedComponent(Tree);

class v1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      z: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.z,
      {
        duration: 3000,
        toValue: -10,
      }
    ).start();
  }

  render() {
    return (
      <View>
        <AmbientLight intensity={0.85} />
        {/* this basically is the ship */}
        <Tree
          style={{
            transform: [
              {scale: 1},
              {translate: [0, -4, -1]},
            ]
          }}
        />
        <Animated.View
          style={{
            transform: [
              {scale: 1},
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
