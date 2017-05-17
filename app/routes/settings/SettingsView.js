import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {Button} from '../../components/button';

export default class SettingsView extends Component {

  render() {
    return (
      <View>
        <Text>Settings view</Text>
        <Text>It should say the name of the platform below, since this is demonstrating platform-specific code</Text>
        <Text/>
        <Button text="Some button"/>
      </View>
    );
  }
}