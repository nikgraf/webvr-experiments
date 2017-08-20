import React from 'react';
import {Animated, asset, Mesh, View} from 'react-vr';
import Easing from 'Easing';

export default class Asteroid01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotationX: new Animated.Value(0),
      rotationY: new Animated.Value(0),
    };
  }

  startAnimation = (valueReference, startValue, addition) => {
    Animated.timing(valueReference, {
      duration: 20000,
      toValue: startValue + addition,
      easing: Easing.linear,
    }).start(() => {
      this.startAnimation(valueReference, startValue + addition, addition);
    });
  };

  componentDidMount() {
    this.startAnimation(this.state.rotationX, 0, 360);
    this.startAnimation(this.state.rotationY, 0, 180);
  }

  render() {
    const {style} = this.props;
    return (
      <View style={style}>
        <Animated.View
          style={{
            transform: [
              {rotateX: this.state.rotationX},
              {rotateY: this.state.rotationY},
            ],
          }}
        >
          <Mesh
            style={{
              transform: [{scale: [0.6, 0.6, 0.6]}],
            }}
            source={{
              mesh: asset('asteroids/asteroid01.obj'),
              mtl: asset('asteroids/asteroid01.mtl'),
              lit: true,
            }}
          />
        </Animated.View>
      </View>
    );
  }
}
