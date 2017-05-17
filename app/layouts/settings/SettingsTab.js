import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {StackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {SettingsView} from '../../routes/settings';

SettingsView.navigationOptions = {
    title: 'Settings',
  }

const SettingsTab = StackNavigator({
  Home: {
    screen: SettingsView
  }
});

SettingsTab.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

export default SettingsTab;