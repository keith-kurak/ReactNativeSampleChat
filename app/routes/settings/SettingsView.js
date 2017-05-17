import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SettingsView extends Component {
  static navigationOptions = {
    title: 'Settings',
  }

  render() {
    return (
      <View>
        <Text>Settings view</Text>
      </View>
    );
  }
}