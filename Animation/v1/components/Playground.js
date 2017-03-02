import React from 'react'
import { asset, Animated, Mesh, Text, View, Image } from 'react-vr'
import Tree from './Tree'

const AnimatedTree = Animated.createAnimatedComponent(Tree);

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.translateValue,
      {
        duration: 3000,
        toValue: 10,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={{
          transform: [
            {scale: 1},
            {translate: [-5, -2, -6]},
            {translateX: this.state.translateValue},
          ]
        }}
      >
        <AnimatedTree />
      </Animated.View>
    );
  }
}
