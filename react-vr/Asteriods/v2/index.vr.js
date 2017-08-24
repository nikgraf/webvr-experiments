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
import Easing from 'Easing';
import World from './components/World';
import Asteroid01 from './components/Asteroid01';
import Cockpit from './components/Cockpit';
import Earth from './components/Earth';
import Button from './components/Button.js';

const AnimatedWorld = Animated.createAnimatedComponent(World);

class Asteroids extends React.Component {
  constructor(props) {
    super(props);

    this.spaceSkymap = [
      '../static_assets/space/space_right.png',
      '../static_assets/space/space_left.png',
      '../static_assets/space/space_up.png',
      '../static_assets/space/space_down.png',
      '../static_assets/space/space_back.png',
      '../static_assets/space/space_front.png'
    ];

    this.state = {
      x: new Animated.Value(0),
      y: new Animated.Value(0),
      z: new Animated.Value(-28),
      rotateY: new Animated.Value(0),
      moveLeft: false,
      moveRight: false,
    };
  }

  startAnimation = (valueReference, startValue, addition) => {
    Animated.timing(
      valueReference,
      {
        duration: 20000,
        toValue: startValue + addition,
        easing: Easing.linear,
      }
    ).start(() => {
      this.startAnimation(valueReference, startValue + addition, addition);
    });
  }

  startMoveYAnimation = (addition) => {
    Animated.timing(
      this.state.x,
      {
        duration: 300,
        toValue: this.state.x._value - addition,
        easing: Easing.linear,
      }
    ).start();

    Animated.timing(
      this.state.rotateY,
      {
        duration: 300,
        toValue: this.state.rotateY._value + addition,
        easing: Easing.linear,
      }
    ).start(() => {
      if (this.state.moveLeft || this.state.moveRight) {
        this.startMoveYAnimation(addition);
      }
    });
  }

  componentDidMount() {
    // start continuous forward movement
    this.startAnimation(this.state.z, -28, 10);
  }

  startMoveLeft = () => {
    this.setState((prevState) => (
      {
        ...prevState,
        moveLeft: true,
      }
    ));
    this.startMoveYAnimation(-1);
  }

  stopMoveLeft = () => {
    this.setState((prevState) => (
      {
        ...prevState,
        moveLeft: false,
      }
    ));
  }

  startMoveRight = () => {
    this.setState((prevState) => (
      {
        ...prevState,
        moveRight: true,
      }
    ));
    this.startMoveYAnimation(1);
  }

  stopMoveRight = () => {
    this.setState((prevState) => (
      {
        ...prevState,
        moveRight: false,
      }
    ));
  }

  render() {
    return (
      <View>
        <AmbientLight
          intensity={2.1}
          style={{
            transform: [
              { translate: [-172, -110, -170] },
            ]
          }}
        />
        <Pano source={ {uri: this.spaceSkymap} }/>

        <Cockpit
          style={{
            transform: [
              {scale: 1},
              {translate: [0, 0, 1]},
            ]
          }}
          startMoveLeft={this.startMoveLeft}
          stopMoveLeft={this.stopMoveLeft}
          startMoveRight={this.startMoveRight}
          stopMoveRight={this.stopMoveRight}
        />

        <Animated.View
          style={{
            transform: [
              {rotateY: this.state.rotateY},
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

AppRegistry.registerComponent('Asteroids', () => Asteroids);
