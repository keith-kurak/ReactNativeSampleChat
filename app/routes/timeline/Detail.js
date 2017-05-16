import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Detail extends React.Component {

  static navigationOptions = {
    title: 'Message',
  }

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}