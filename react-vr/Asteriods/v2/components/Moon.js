import React from 'react';
import {
  Animated,
  asset,
  Mesh,
  View,
} from 'react-vr';
import Easing from 'Easing';

export default class Moon extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rotationY: new Animated.Value(0),
    };
  }

  startAnimation = (valueReference, startValue, addition) => {
    Animated.timing(
      valueReference,
      {
        duration: 450000,
        toValue: startValue + addition,
        easing: Easing.linear,
      }
    ).start(() => {
      this.startAnimation(valueReference, startValue + addition, addition);
    });
  }

  componentDidMount() {
    this.startAnimation(this.state.rotationY, 0, 360);
  }

  render() {
    const { style } = this.props;
    return (
      <View style={style}>
        <Animated.View
          style={{
            transform: [
              { rotateY: this.state.rotationY },
            ]
          }}
        >
          <Mesh
            style={{
              transform: [
                { scale: 0.2 },
              ]
            }}
            source={{ mesh: asset('moon/moon.obj'), mtl: asset('moon/moon.mtl'), lit: true }}
          />
        </Animated.View>
      </View>
    );
  }
};
