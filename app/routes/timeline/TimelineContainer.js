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
  // this should be PropTypes.navigation,
  // but I'm missing the include. Seems odd that I'd include the whole thing just for the prop type,
  // but maybe that's the way you do it.
  navigation: PropTypes.object.isRequired,
};
