import React from 'react';
import {
  AppRegistry,
  asset,
  StyleSheet,
  Pano,
  Text,
  View,
} from 'react-vr';
import Playground from './components/Playground';

class v1 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Playground />
      </View>
    );
  }
};

AppRegistry.registerComponent('v1', () => v1);
