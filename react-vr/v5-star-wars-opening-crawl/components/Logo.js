import React from 'react';
import {Animated, asset} from 'react-vr';
import Easing from 'easing';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      z: new Animated.Value(-3),
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      this.state.opacity.setValue(1);
      Animated.timing(this.state.z, {
        duration: 7000,
        toValue: -30,
        easing: Easing.linear,
      }).start();

      Animated.timing(this.state.opacity, {
        duration: 1000,
        toValue: 0,
        delay: 6000,
        easing: Easing.linear,
      }).start();
    }, 8800);
  }

  render() {
    return (
      <Animated.Image
        source={{uri: '/static_assets/logo.png'}}
        style={{
          position: 'absolute',
          width: 2.326,
          height: 1,
          layoutOrigin: [0.5, 0.5],
          opacity: this.state.opacity,
          transform: [{translateZ: this.state.z}],
        }}
      />
    );
  }
}
