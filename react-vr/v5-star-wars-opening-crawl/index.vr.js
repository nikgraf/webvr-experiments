import React from 'react';
import {
  Animated,
  AppRegistry,
  asset,
  StyleSheet,
  Image,
  Pano,
  Text,
  Sound,
  View,
} from 'react-vr';
import Intro from './components/Intro';
import Logo from './components/Logo';
import MovingText from './components/MovingText';

const spaceSkymap = [
  asset('space/space_right.png'),
  asset('space/space_left.png'),
  asset('space/space_up.png'),
  asset('space/space_down.png'),
  asset('space/space_back.png'),
  asset('space/space_front.png'),
];

export default class World extends React.Component {
  state = {
    panoLoaded: false,
    logoLoaded: false,
  };

  loadedPano = () => {
    this.setState({panoLoaded: true});
  };

  loadedLogo = () => {
    this.setState({logoLoaded: true});
  };

  render() {
    const loaded = this.state.panoLoaded && this.state.logoLoaded;
    return (
      <View>
        <Sound
          playStatus={loaded ? 'play' : 'stop'}
          onLoad={() => {
            console.log('weeeeee');
          }}
          source={{
            ogg: '/static_assets/song.ogg',
            mp3: '/static_assets/song.mp3',
          }}
        />
        <Pano source={spaceSkymap} onLoadEnd={this.loadedPano} />
        <Image
          onLoadEnd={this.loadedLogo}
          source={{uri: '/static_assets/logo.png'}}
          style={{
            position: 'absolute',
            opacity: 0,
          }}
        />
        {!loaded
          ? <View>
              <Text
                style={{
                  color: 'rgb(68, 220, 213)',
                  layoutOrigin: [0.5, 0.5],
                  transform: [{translateZ: -1.5}],
                }}
              >
                Loading...
              </Text>
            </View>
          : <View>
              <Logo />
              <Intro />
              <Animated.View
                style={{
                  transform: [{rotateX: -60}],
                }}
              >
                <MovingText />
              </Animated.View>
            </View>}
      </View>
    );
  }
}

AppRegistry.registerComponent('World', () => World);
