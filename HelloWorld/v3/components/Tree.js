import React from 'react';
import {
  asset,
  Model,
  View,
} from 'react-vr';

export default ({ style }) => (
  <View
    style={style}
  >
    <Model
      source={{ obj: asset('tree-trunk.obj'), mtl: asset('tree-trunk.mtl') }}
      lit
      style={{
        transform: [
          {scale: [0.6, 1, 0.6]},
        ]
      }}
    />
    <Model
      source={{ obj: asset('tree-crown.obj'), mtl: asset('tree-crown.mtl') }}
      lit
      style={{
        transform: [
          {translate: [0, 2.5, 0]},
        ]
      }}
    />
  </View>
);
