import React from 'react'
import { View } from 'react-vr'
import Asteroid01 from './Asteroid01';
import Asteroid02 from './Asteroid02';
import Asteroid03 from './Asteroid03';
import Earth from './Earth';

export default class World extends React.Component {
  render() {
    return (
      <View>

        <Asteroid01
          style={{
            transform: [
              {scale: 0.5},
              {translate: [0, 0, -30]},
            ]
          }}
        />

        <Asteroid02
          style={{
            transform: [
              {scale: 0.9},
              {translate: [-30, 12, -20]},
            ]
          }}
        />

        <Asteroid03
          style={{
            transform: [
              {scale: 1},
              {translate: [50, -3, -20]},
            ]
          }}
        />

        <Earth
          style={{
            transform: [
              {translate: [-45, 0, -170]},
            ]
          }}
        />

      </View>
    );
  }
}
