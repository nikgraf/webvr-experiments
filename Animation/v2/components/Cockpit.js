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
      source={{ mesh: asset('cockpit/cockpit.obj'), mtl: asset('cockpit/cockpit.mtl'), lit: true }}
      style={{
        transform: [
          {scale: [0.6, 0.6, 0.6]},
        ]
      }}
    />
  </View>
);
