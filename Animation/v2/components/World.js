import React from 'react'
import { View } from 'react-vr'
import Asteroid01 from './Asteroid01'

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
      </View>
    );
  }
}
