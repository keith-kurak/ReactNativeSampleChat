import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import { chatStore } from '../../stores';
import Timeline from './Timeline';

/**
 * Wires the chatStore and navigation to the Timeline.
 */
@observer
export default class TimelineContainer extends Component {

  render() {
    // Iron coder challenge: pass functionality from navigation without actually
    // tightly-coupling to navigation.
    // In our super-ideal world, no navigation concern would be exposed beyond the layout.
    return (
      <Timeline store={chatStore} navigation={this.props.navigation} />
    );
  }
}

TimelineContainer.propTypes = {
  // this should be some kind of navigation prop type, but I can't figure out if that even exists
  navigation: PropTypes.object.isRequired,
};
