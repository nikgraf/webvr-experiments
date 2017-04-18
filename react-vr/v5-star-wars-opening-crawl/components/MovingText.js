import React from 'react';
import {Animated} from 'react-vr';
import Easing from 'easing';

const textBaseStyle = {
  color: '#FFE81F',
  // textAlign: 'justify', // not supported
  width: 1.255,
};

const textStyle = {
  ...textBaseStyle,
  marginBottom: 0.15,
  marginLeft: 0.11,
};

export default class MovingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      y: new Animated.Value(-1.5),
      opacity: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.y, {
      duration: 150000,
      toValue: 10,
      delay: 4500,
      easing: Easing.linear,
    }).start();

    Animated.timing(this.state.opacity, {
      duration: 3000,
      toValue: 1,
      delay: 9500,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          layoutOrigin: [0.5, 0.5],
          opacity: this.state.opacity,
          transform: [{translate: [0, 0, 0]}, {translateY: this.state.y}],
        }}
      >
        <Animated.Text
          style={{...textBaseStyle, textAlign: 'center', marginBottom: 0.01}}
        >
          Episode IV
        </Animated.Text>
        <Animated.Text
          style={{
            ...textBaseStyle,
            textAlign: 'center',
            marginBottom: 0.18,
            fontSize: 0.16,
          }}
        >
          A NEW HOPE
        </Animated.Text>
        <Animated.Text style={textStyle}>
          It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.
        </Animated.Text>
        <Animated.Text style={textStyle}>
          During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.
        </Animated.Text>
        <Animated.Text style={textStyle}>
          Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy...
        </Animated.Text>
      </Animated.View>
    );
  }
}
