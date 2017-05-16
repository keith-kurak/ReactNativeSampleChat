import React, { Component } from 'react';
import {observer} from 'mobx-react';

import {chatStore} from '../../stores';
import Detail from './Detail';

export default class DetailContainer extends Component {
  render() {
    return (
      <Detail text={chatStore.getMessage(this.props.navigation.state.params.id).text}/>
    );
  }
}