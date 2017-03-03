import React from 'react';
import {
  Animated,
  asset,
  Mesh,
  View,
  Easing,
} from 'react-vr';

console.log('easing', Easing)

export default class Asteroid01 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rotation: new Animated.Value(0),
    };
  }

  startAnimation = (value) => {
    Animated.timing(
      this.state.rotation,
      {
        duration: 10000,
        toValue: value,
        easing: Easing.linear(),
      }
    ).start(() => {
      this.startAnimation(value + value);
    });
  }

  componentDidMount() {
    this.startAnimation(360);
  }

  render() {
    const { style } = this.props;
    return (
      <View style={style}>
        <Animated.View
          style={{
            transform: [
              {rotateY: this.state.rotation},
              // {rotateX: this.state.rotation / 3},
              // {rotateZ: this.state.rotation / 2}
            ]
          }}
        >
          <Mesh
            style={{
              transform: [
                {scale: [0.6, 0.6, 0.6]},
              ]
            }}
            source={{ mesh: asset('asteroids/asteroid01.obj'), mtl: asset('asteroids/asteroid01.mtl'), lit: true }}
          />
        </Animated.View>
      </View>
    );
  }
};
