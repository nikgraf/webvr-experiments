import React from 'react';
import {Animated} from 'react-vr';
import Easing from 'easing';

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.opacity, {
      duration: 1000,
      toValue: 1,
      delay: 1000,
      easing: Easing.linear,
    }).start();

    window.setTimeout(() => {
      Animated.timing(this.state.opacity, {
        duration: 1000,
        toValue: 0,
      }).start();
    }, 6000);
  }

  render() {
    return (
      <Animated.Text
        style={{
          color: 'rgb(68, 220, 213)',
          layoutOrigin: [0.5, 0.5],
          width: 1.36,
          opacity: this.state.opacity,
          transform: [{translateZ: -1.5}],
        }}
      >
        A long time ago in a galaxy far,
        far away...
      </Animated.Text>
    );
  }
}
