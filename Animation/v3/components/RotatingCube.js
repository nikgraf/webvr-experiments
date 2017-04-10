import React from 'react';
import { Animated, asset, Model } from 'react-vr';

class RotatingCube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      yRotation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.yRotation,
      {
        duration: 10000,
        toValue: 930,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View
        source={{uri: '/static_assets/logo.png'}}
        style={{
          transform: [
            {translate: [0, -5, -20]},
            {rotateY: this.state.yRotation},
            {rotateX: -40}
          ]
        }}
      >
        <Model
          source={{ obj: asset('cube2.obj'), mtl: asset('cube2.mtl') }}
          lit
        />
      </Animated.View>
    );
  }
}

export default Animated.createAnimatedComponent(RotatingCube);
