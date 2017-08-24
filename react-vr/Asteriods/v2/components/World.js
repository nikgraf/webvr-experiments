import React from 'react'
import { View } from 'react-vr'
import Asteroid01 from './Asteroid01';
import Asteroid02 from './Asteroid02';
import Asteroid03 from './Asteroid03';
import Earth from './Earth';
import Moon from './Moon';

export default class World extends React.Component {
  render() {
    return (
      <View>

        <Asteroid01
          style={{
            transform: [
              {scale: 0.5},
              {translate: [20, -3, -330]},
            ]
          }}
        />

        <Asteroid01
          style={{
            transform: [
              {scale: 1.7},
              {translate: [-80, 33, -180]},
            ]
          }}
        />

        <Asteroid02
          style={{
            transform: [
              {scale: 0.9},
              {translate: [-30, 12, -120]},
            ]
          }}
        />

        <Asteroid03
          style={{
            transform: [
              {scale: 1},
              {translate: [50, -3, -50]},
            ]
          }}
        />

        <Earth
          style={{
            transform: [
              {scale: 3.2},
              {translate: [-72, -10, -170]},
            ]
          }}
        />

        <Moon
          style={{
            transform: [
              {scale: 3},
              {translate: [60, 10, -220]},
            ]
          }}
        />

      </View>
    );
  }
}
