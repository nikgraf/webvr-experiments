import React from 'react';
import {
  asset,
  Mesh,
  View,
} from 'react-vr';
import { range, map, xprod, flatten } from 'ramda';
import Tree from './Tree';

const randomPosition = () => (Math.floor(Math.random() * 10) - 5);
const randomHeight = () => (Math.random() - 1);
const randomScale = () => (Math.random() * 0.25 + 1);

const grid = xprod(range(0, 10), range(0, 10));
const trees = grid.map((entry, index) => {
  return { x: entry[0] * 8 + randomPosition(), y: entry[1] * 8 + randomPosition(), index };
});

export default ({ style }) => (
  <View style={style}>
    {trees.map((tree) => {
      const scale = randomScale();
      return (
        <Tree
          key={tree.index}
          style={{
            transform: [
              {scale: [scale, scale, scale]},
              {translate: [tree.x, randomHeight(), tree.y]},
            ]
          }}
        />
      );
    })}
  </View>
);
