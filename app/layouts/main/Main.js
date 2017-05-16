// Tab navigation for the entire app.
// Also includes stack navigation for the timeline, though that may be refactored out later.

import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';

import {
  TabNavigator,
  StackNavigator
} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
//used directions here to add to XCode (cocoapod version): https://github.com/oblador/react-native-vector-icons

import {TimelineContainer, DetailContainer} from '../../routes/timeline';

const TimelineScreen = StackNavigator({
    Home: {
      screen: TimelineContainer
    },
    Detail: {
      screen: DetailContainer,
      path: 'messages/:id',
    }
  });

TimelineScreen.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor, focused }) => (
      <Ionicons
        name={focused ? 'ios-home' : 'ios-home-outline'}
        size={26}
        style={{ color: tintColor }}
      />
    ),
  };

const SettingsScreen = ({ navigation }) => (
  <View>
    <Text>settings screen</Text>
  </View>
);

SettingsScreen.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-settings' : 'ios-settings-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

const Main = TabNavigator({
  Timeline: {
    screen: TimelineScreen,
    path: '',
  },
  Settings: {
    screen: SettingsScreen,
    path: 'settings',
  },
}, {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  },
});

export default Main;