import React from 'react';
import {
  asset,
  Mesh,
  View,
} from 'react-vr';

export default ({ style }) => (
  <View
    style={style}
  >
    <Mesh
      source={{ mesh: asset('tree-trunk.obj'), mtl: asset('tree-trunk.mtl'), lit: true }}
      style={{
        transform: [
          {scale: [0.6, 1, 0.6]},
        ]
      }}
    />
    <Mesh
      source={{ mesh: asset('tree-crown.obj'), mtl: asset('tree-crown.mtl'), lit: true }}
      style={{
        transform: [
          {translate: [0, 2.5, 0]},
        ]
      }}
    />
  </View>
);
