import React from 'react';
import {
  asset,
  Mesh,
  View,
  VrButton,
  Text,
} from 'react-vr';
import Button from './Button';

export default ({
  style,
  startMoveLeft,
  stopMoveLeft,
  startMoveRight,
  stopMoveRight,
}) => (
  <View
    style={style}
  >
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        width: 1,
        alignItems: 'stretch',
        transform: [{translate: [0, 1, -2]}],
      }}
    >
      <Button
        text=''
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          width: .5,
          height: 2,
          transform: [
            {rotateY: 45},
            {rotateX: 15},
            {translate: [-.9, -.5, -.3]}
          ],
        }}
        enterCallback={() => {
          startMoveLeft();
        }}
        exitCallback={() => {
          stopMoveLeft();
        }}
      />
      <Button
        text=''
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0)',
          width: .5,
          transform: [
            {rotateY: -45},
            {rotateX: 15},
            {translate: [.2, -.3, .3]}
          ],
        }}
        enterCallback={() => {
          startMoveRight();
        }}
        exitCallback={() => {
          stopMoveRight();
        }}
      />
    </View>

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
