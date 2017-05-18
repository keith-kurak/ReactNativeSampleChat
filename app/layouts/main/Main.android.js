// Tab navigation for the entire app.
// Also includes stack navigation for the timeline, though that may be refactored out later.

import React, { Component } from 'react';
import { Text, View, Platform } from 'react-native';

import { DrawerNavigator } from 'react-navigation';

import {TimelineTab} from '../timeline';
import {SettingsTab} from '../settings';

/**
* Main tab-based navigation for app
*/
const Main = DrawerNavigator({
  Timeline: {
    screen: TimelineTab,
    path: '',
  },
  Settings: {
    screen: SettingsTab,
    path: 'settings',
  }
});

export default Main;