import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';

import {StackNavigator} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Icon} from 'native-base';

import {SettingsView} from '../../routes/settings';

SettingsView.navigationOptions = ({ navigation, screenProps }) => ({
    title: 'Settings',
    headerLeft: Platform.OS === 'ios' ? null :
    (<Button transparent onPress={() => navigation.navigate('DrawerOpen')}>
      <Icon name='ios-menu' />
    </Button>)
  });

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