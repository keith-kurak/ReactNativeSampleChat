import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import {chatStore} from '../../stores';
import Timeline from './Timeline';

@observer
export default class TimelineContainer extends Component {

  render() {
    return (
      <Timeline store={chatStore} navigation={this.props.navigation}/>
    );
  }
}

TimelineContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};