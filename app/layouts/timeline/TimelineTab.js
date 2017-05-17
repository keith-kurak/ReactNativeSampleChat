import React, { Component } from 'react';
import { Text, View } from 'react-native';

import {StackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Icon} from 'native-base';

import {TimelineContainer, DetailContainer, ComposeContainer} from '../../routes/timeline';

// layer on navigation concerns here so they're not in our container.
// Also, this is kind of part of the layout now, because the compose button opens a few view
TimelineContainer.navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Timeline',
    headerRight: 
    //this should probably be a modal instead of just another view on the stack- will try that later
    <Button transparent onPress={() => navigation.navigate('Compose')}>
      <Icon name='ios-create-outline' />
    </Button>
  });

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
  },
  Compose: {
    screen: ComposeContainer
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
  )
};

export default TimelineTab;