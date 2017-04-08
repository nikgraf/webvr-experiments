import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import BouncingText from './components/BouncingText';

export default class World extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <BouncingText />
      </View>
    );
  }
};

AppRegistry.registerComponent('World', () => World);
