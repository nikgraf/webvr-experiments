import React from 'react';
import {
  Animated,
  asset,
  Mesh,
  View,
} from 'react-vr';
import Easing from 'Easing';

export default class Earth extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rotationX: new Animated.Value(0),
    };
  }

  startAnimation = (valueReference, startValue, addition) => {
    Animated.timing(
      valueReference,
      {
        duration: 900000,
        toValue: startValue + addition,
        easing: Easing.linear,
      }
    ).start(() => {
      this.startAnimation(valueReference, startValue + addition, addition);
    });
  }

  componentDidMount() {
    this.startAnimation(this.state.rotationX, 0, 360);
  }

  render() {
    const { style } = this.props;
    return (
      <View style={style}>
        <Animated.View
          style={{
            transform: [
              {rotateX: this.state.rotationX},
            ]
          }}
        >
          <Mesh
            style={{
              transform: [
                {scale: 0.2 },
              ]
            }}
            source={{ mesh: asset('earth/earth.obj'), mtl: asset('earth/earth.mtl'), lit: true }}
          />
        </Animated.View>
      </View>
    );
  }
};
