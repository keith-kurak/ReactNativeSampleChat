import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Main} from './layouts/main';

export default class App extends Component {
  render() {
    return (
        <Main/>
      );
  }
}

//use this to suppress warnings in the viewport. 
// This warning comes from deprecated libraries that react-navigation is still using
//hopefully this gets fixed soon
console.ignoredYellowBox = ['Warning: BackAndroid']
console.ignoredYellowBox = ['Warning: View.propTypes'];