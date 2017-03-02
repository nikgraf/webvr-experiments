import React from 'react'
import { asset, Animated, Mesh, Text, View } from 'react-vr'
import Tree from './Tree'

const AnimatedTree = Animated.createAnimatedComponent(Tree);

export default class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 0.8,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }

  render() {
    return (
      <Animated.View
        style={{
          transform: [
            {scale: this.state.bounceValue},
            {translate: [0, 0, -6]}
          ]
        }}
      >
        <Text>
          First part and
        </Text>
        <AnimatedTree />
        <View>
          <Mesh
            source={{
              mesh: asset('tree-trunk.obj'),
              mtl: asset('tree-trunk.mtl'),
              lit: true
            }}
            style={{
              transform: [
                {translate: [0, 2.5, 0]},
              ]
            }}
          />
        </View>
      </Animated.View>
    );
  }
}
