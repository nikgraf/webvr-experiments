import React from 'react';
import {Animated, asset, Mesh, View} from 'react-vr';
import Easing from 'Easing';

export default class Asteroid03 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotationX: new Animated.Value(0),
      rotationZ: new Animated.Value(0),
    };
  }

  startAnimation = (valueReference, startValue, addition) => {
    Animated.timing(valueReference, {
      duration: 30000,
      toValue: startValue + addition,
      easing: Easing.linear,
    }).start(() => {
      this.startAnimation(valueReference, startValue + addition, addition);
    });
  };

  componentDidMount() {
    this.startAnimation(this.state.rotationX, 0, 140);
    this.startAnimation(this.state.rotationZ, 0, 240);
  }

  render() {
    const {style} = this.props;
    return (
      <View style={style}>
        <Animated.View
          style={{
            transform: [
              {rotateX: this.state.rotationX},
              {rotateZ: this.state.rotationZ},
            ],
          }}
        >
          <Mesh
            style={{
              transform: [{scale: [0.6, 0.6, 0.6]}],
            }}
            source={{
              mesh: asset('asteroids/asteroid03.obj'),
              mtl: asset('asteroids/asteroid03.mtl'),
              lit: true,
            }}
          />
        </Animated.View>
      </View>
    );
  }
}
