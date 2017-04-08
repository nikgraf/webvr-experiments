import React from 'react'
import { Animated } from 'react-vr'

export default class BouncingText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 2,
        friction: 0.5,
        tension: 4
      }
    ).start();
  }

  render() {
    return (
      <Animated.Text
        style={{
          layoutOrigin: [0.5, 0.5],
          transform: [
            { translate: [0, 0, -1] },
            { scale: this.state.bounceValue },
          ],
        }}>
        hello
      </Animated.Text>
    );
  }
}
