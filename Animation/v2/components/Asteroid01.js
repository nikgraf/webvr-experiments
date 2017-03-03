import React from 'react';
import {
  asset,
  Mesh,
  View,
} from 'react-vr';

export default class Asteroid01 extends React.Component {
  constructor() {
    super();
    this.state = {
      rotation: 130,
    };
    this.lastUpdate = Date.now();

    this.rotate = this.rotate.bind(this);
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate() {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;

    this.setState({
        rotation: this.state.rotation + delta / 150
    });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  render() {
    const { style } = this.props;
    return (
      <View
        style={style}
      >
        <Mesh
          style={{
            transform: [
              {scale: [0.6, 0.6, 0.6]},
              {rotateY: this.state.rotation},
              {rotateX: this.state.rotation / 3},
              {rotateZ: this.state.rotation / 2}
            ]
          }}
          source={{ mesh: asset('asteroids/asteroid01.obj'), mtl: asset('asteroids/asteroid01.mtl'), lit: true }}
        />
      </View>
    );
  }
};