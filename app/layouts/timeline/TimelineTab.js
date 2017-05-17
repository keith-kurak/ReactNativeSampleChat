import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {StackNavigator} from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {TimelineContainer, DetailContainer} from '../../routes/timeline';

/**
 * Stack navigation for timeline and related views in the Timeline tab in main view.
 */
const TimelineTab = StackNavigator({
  Home: {
    screen: TimelineContainer
  },
  Detail: {
    screen: DetailContainer,
    path: 'messages/:id',
  }
});

TimelineTab.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ tintColor, focused }) => (
    <Ionicons
      name={focused ? 'ios-home' : 'ios-home-outline'}
      size={26}
      style={{ color: tintColor }}
    />
  ),
};

export default TimelineTab;