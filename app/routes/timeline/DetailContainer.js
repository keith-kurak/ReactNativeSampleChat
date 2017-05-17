import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import {chatStore} from '../../stores';
import Detail from './Detail';

/**
 * Passes a single message from the chatStore to the detail component, which shows a single message from the timeline.
 */
export default class DetailContainer extends Component {
  render() {

    return (
      <Detail text={chatStore.getMessage(this.props.navigation.state.params.id).text}/>
    );
  }
}

DetailContainer.propTypes = {
  navigation: PropTypes.object.isRequired
};