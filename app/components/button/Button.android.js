import React, { Component } from 'react';
import { Text, View,  TouchableHighlight } from 'react-native';

import Styles from './styles';

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  _onPressButton() {
    console.log("You tapped the button!");
    if(this.props.onButtonPress) {
      this.props.onButtonPress();
    }
  }

  render() {

    // using this to demonstrate platform-specific components. Not meant to really do this with a button.
    return (
        <View>
          <Text>-Android-</Text>
          <View style={[Styles.circleArea, Styles.buttonStyle, Styles.smallSpace]}>
            <TouchableHighlight style={[Styles.circleArea, Styles.container]} onPress={() => this._onPressButton()}>
              <Text>{this.props.text}</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
  }
}