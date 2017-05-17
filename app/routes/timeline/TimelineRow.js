import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TouchableHighlight } from 'react-native';
import moment from 'moment';
import {observer} from 'mobx-react';

import Styles from './styles';

@observer
export default class TimelineRow extends React.Component {

  render() {
    var formattedDate = moment(this.props.date).format('LLL');

    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View style={Styles.rowContainer}>
          <View style={Styles.textContainer}>
            <Text>{this.props.text}</Text>
          </View>
          <View style={Styles.timeContainer}>
            <Text style={Styles.timeText}>{formattedDate}</Text>
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}

TimelineRow.propTypes = {
  text: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired
};