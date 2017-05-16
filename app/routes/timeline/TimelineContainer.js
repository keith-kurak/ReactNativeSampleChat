import React, { Component } from 'react';
import {observer} from 'mobx-react';

import {chatStore} from '../../stores';
import Timeline from './Timeline';

@observer
export default class TimelineContainer extends Component {
  static navigationOptions = {
    title: 'Timeline',
  }

  render() {
    return (
      <Timeline store={chatStore} navigation={this.props.navigation}/>
    );
  }
}