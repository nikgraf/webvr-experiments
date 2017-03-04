import React from 'react';
import {
  Text,
  VrButton,
} from 'react-vr';

export default class Button extends React.Component {
  render() {
    return (
      <VrButton
        style={this.props.style}
        onEnter={() => this.props.enterCallback()}
        onExit={() => this.props.exitCallback()}
      >
        <Text>
          {this.props.text}
        </Text>
      </VrButton>
    );
  }
}